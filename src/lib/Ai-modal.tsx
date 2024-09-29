/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI("AIzaSyBkN_dw2c36Pye-wVck7tnbZCN52IU_Spw");

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };



export const onGetData = async (promt:any) => {
    const chatSession = model.startChat({
        generationConfig,
        history: [
            {
              role: "user",
              parts: [
                {text: "create a json file that suggest places and activity based on this information : place : colombo , solo trip , and i am interested in food , culture , adventure , bear , dance and sea sighting , create a trip plan for 3 days must includes : image url for places , opening hours , contact information , tickets price , geo location coordinates"},
              ],
            },
            {
              role: "model",
              parts: [
                {text: "```json\n{\"trip\": [{\"day\": \"Day 1: Food and Culture\", \"activities\": [{\"name\": \"Galle Face Green\", \"description\": \"Enjoy the bustling atmosphere of Galle Face Green, a popular promenade with street food vendors, street performers, and scenic views of the Indian Ocean. You can have a leisurely stroll or simply relax and enjoy the ambiance.\", \"image_url\": \"https://www.lonelyplanet.com/media/images/I_PLACE_5278942212228915601.jpg\", \"opening_hours\": \"24/7\", \"contact_information\": \"N/A\", \"tickets_price\": \"Free\", \"geo_location_coordinates\": \"6.9271, 79.8560\"}, {\"name\": \"Pettah Market\", \"description\": \"Experience the vibrant Pettah Market, a bustling shopping hub with an eclectic mix of goods and services. Explore the narrow lanes, haggle with vendors, and soak up the energy of this iconic marketplace.\", \"image_url\": \"https://www.srilankatourism.com/media/images/pettah-market.jpg\", \"opening_hours\": \"7:00 AM - 7:00 PM\", \"contact_information\": \"N/A\", \"tickets_price\": \"Free\", \"geo_location_coordinates\": \"6.9271, 79.8560\"}, {\"name\": \"The Gallery Cafe Colombo\", \"description\": \"Savor authentic Sri Lankan flavors at The Gallery Cafe Colombo. This popular spot offers a delectable menu of traditional dishes and beverages, with a focus on fresh, local ingredients.\", \"image_url\": \"https://www.thegallerycafecolombo.com/images/gallery-cafe-colombo.jpg\", \"opening_hours\": \"11:00 AM - 10:00 PM\", \"contact_information\": \"+94 11 257 4080\", \"tickets_price\": \"N/A\", \"geo_location_coordinates\": \"6.9271, 79.8560\"}]}, {\"day\": \"Day 2: Adventure and Sea Sighting\", \"activities\": [{\"name\": \"Galle Face Green\", \"description\": \"Enjoy a scenic boat tour along the coastline, offering breathtaking views of the Colombo skyline and the Indian Ocean. Look out for marine life, including whales, dolphins, and sea turtles, making this a perfect activity for nature enthusiasts.\", \"image_url\": \"https://www.srilankatourism.com/media/images/galle-face-green.jpg\", \"opening_hours\": \"7:00 AM - 7:00 PM\", \"contact_information\": \"+94 11 243 6866\", \"tickets_price\": \"USD 20-30 per person\", \"geo_location_coordinates\": \"6.9271, 79.8560\"}, {\"name\": \"Galle Face Green\", \"description\": \"Enjoy a scenic boat tour along the coastline, offering breathtaking views of the Colombo skyline and the Indian Ocean. Look out for marine life, including whales, dolphins, and sea turtles, making this a perfect activity for nature enthusiasts.\", \"image_url\": \"https://www.srilankatourism.com/media/images/galle-face-green.jpg\", \"opening_hours\": \"7:00 AM - 7:00 PM\", \"contact_information\": \"+94 11 243 6866\", \"tickets_price\": \"USD 20-30 per person\", \"geo_location_coordinates\": \"6.9271, 79.8560\"}, {\"name\": \"Galle Face Green\", \"description\": \"Enjoy a scenic boat tour along the coastline, offering breathtaking views of the Colombo skyline and the Indian Ocean. Look out for marine life, including whales, dolphins, and sea turtles, making this a perfect activity for nature enthusiasts.\", \"image_url\": \"https://www.srilankatourism.com/media/images/galle-face-green.jpg\", \"opening_hours\": \"7:00 AM - 7:00 PM\", \"contact_information\": \"+94 11 243 6866\", \"tickets_price\": \"USD 20-30 per person\", \"geo_location_coordinates\": \"6.9271, 79.8560\"}]}, {\"day\": \"Day 3: Dance and Relaxation\", \"activities\": [{\"name\": \"The Independence Square\", \"description\": \"Relax and enjoy the tranquility of Independence Square, a sprawling green space with a serene ambiance. It's a great spot for picnics, leisurely walks, and simply taking in the beauty of nature.\", \"image_url\": \"https://www.srilankatourism.com/media/images/independence-square.jpg\", \"opening_hours\": \"24/7\", \"contact_information\": \"N/A\", \"tickets_price\": \"Free\", \"geo_location_coordinates\": \"6.9271, 79.8560\"}, {\"name\": \"The Independence Square\", \"description\": \"Relax and enjoy the tranquility of Independence Square, a sprawling green space with a serene ambiance. It's a great spot for picnics, leisurely walks, and simply taking in the beauty of nature.\", \"image_url\": \"https://www.srilankatourism.com/media/images/independence-square.jpg\", \"opening_hours\": \"24/7\", \"contact_information\": \"N/A\", \"tickets_price\": \"Free\", \"geo_location_coordinates\": \"6.9271, 79.8560\"}]}]}\n\n```"},
              ],
            },
          ],
      });
    
      const result = await chatSession.sendMessage(promt);
      console.log("result",result.response.text());

}


