// Simple static file server for Face Blur Tool
import { serve } from "https://deno.land/std@0.208.0/http/server.ts";

const handler = async (req: Request): Promise<Response> => {
  const url = new URL(req.url);
  const path = url.pathname === "/" ? "/index.html" : url.pathname;
  
  try {
    const file = await Deno.readFile(`.${path}`);
    const contentType = path.endsWith('.html') ? 'text/html' : 
                      path.endsWith('.css') ? 'text/css' :
                      path.endsWith('.js') ? 'application/javascript' :
                      path.endsWith('.svg') ? 'image/svg+xml' :
                      'application/octet-stream';
    
    return new Response(file, {
      headers: {
        "content-type": contentType,
        "cache-control": "public, max-age=3600",
      },
    });
  } catch {
    // Fallback to index.html for SPA routing
    const file = await Deno.readTextFile("./index.html");
    return new Response(file, {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  }
};

serve(handler);
