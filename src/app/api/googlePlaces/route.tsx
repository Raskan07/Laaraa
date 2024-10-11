
import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json";
const API_KEY  = 'AIzaSyALeWJ7fL9Cu7DCm9mxmMJcIVGELjohwBc';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');

    const url = `${BASE_URL}?query=${query}&key=${API_KEY}`;
    const res = await fetch(url);
    const result = await res.json();
  // Your API logic here
  return NextResponse.json({ message: 'Hello from your API route!',result });
}
