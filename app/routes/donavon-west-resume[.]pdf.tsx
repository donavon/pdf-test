const resumeUrl =
  'https://docs.google.com/document/d/19jc78TNbANQvhGQpX8oeORHEI89WFzFCBXkrVTtbbB0/export?format=pdf';

export const loader = async () => {
  try {
    const response = await fetch(resumeUrl);
    // remove content-disposition header to prevent download
    // fyi... crashes with or without this line
    // response.headers.delete('content-disposition');
    return response;
  } catch (ex) {
    const message = ex instanceof Error ? ex.message : 'Unknown error';
    return new Response(`503 Error: ${message}`, { status: 503 });
  }
};
