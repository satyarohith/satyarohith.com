import {
  h,
  jsx,
  serve,
  serveStatic,
} from "https://deno.land/x/sift@0.3.0/mod.ts";

const Hello = () => (
  <html>
    <main
      style={{
        maxWidth: "28em",
        fontFamily: "Avenir, Helvetica, Arial, sans-serif",
      }}
    >
      <h1>Hello</h1>
      <span>May 2021</span>
      <p>
        I got my first computer in May 2017. Ever since my journey with
        computers and code began. And also my addiction to consuming bytes from
        the internet. I rarely produced. I want to break that addiction.
      </p>
      <p>Thanks!</p>
    </main>
  </html>
);

serve({
  "/hello": () => jsx(<Hello />),
  "/:filename+": serveStatic("public", { baseUrl: import.meta.url }),
});
