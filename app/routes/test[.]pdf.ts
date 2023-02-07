const resumeUrl =
  'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

export const loader = async () => {
  try {
    const response = await fetch(resumeUrl);
    return response;
  } catch (ex) {
    const message = ex instanceof Error ? ex.message : 'Unknown error';
    return new Response(`503 Error: ${message}`, { status: 503 });
  }
};
