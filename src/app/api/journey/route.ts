import journeyData from "@/app/data/journeyData.json";

export async function GET() {
  return Response.json(journeyData);
}
