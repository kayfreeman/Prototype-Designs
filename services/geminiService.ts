
import { GoogleGenAI } from "@google/genai";

// Initialize the API client (Key is handled by the environment)
// Always use the process.env.API_KEY directly when initializing the client instance
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getRegulatoryGuidance = async (topic: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide plain-English compliance guidance for a UK estate agent regarding: ${topic}. Focus on UK Money Laundering Regulations.`,
      config: {
        systemInstruction: "You are the PropComply AI Regulatory Intelligence engine. Your goal is to translate complex UK AML/KYC legislation into actionable, clear, plain-English guidance for small property agencies.",
        tools: [{ googleSearch: {} }],
      },
    });

    return {
      text: response.text,
      sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    };
  } catch (error) {
    console.error("Error fetching regulatory guidance:", error);
    throw error;
  }
};

export const analyzeContractRisk = async (contractText: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze this property document for AML/KYC risks. Identify the parties involved, property details, and any red flags related to source of funds or high-risk jurisdictions: \n\n${contractText}`,
      config: {
        systemInstruction: "You are an expert UK property compliance analyst. Be precise and identify specific risk factors mentioned in the text.",
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error analyzing contract:", error);
    throw error;
  }
};
