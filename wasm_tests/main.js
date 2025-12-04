import init, { apply_grayscale } from "./pkg/rust_wasm_hello.js";

async function run() {
  await init();

  const input = document.getElementById("upload");
  const imgElement = document.getElementById("result-image");

  input.addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // 1. Read file into an ArrayBuffer
    const buffer = await file.arrayBuffer();

    // 2. Convert to Uint8Array (this is what Rust expects)
    const bytes = new Uint8Array(buffer);

    try {
      // 3. Pass the bytes to Rust
      // Rust processes it and returns a Base64 string
      const resultDataUrl = apply_grayscale(bytes);

      // 4. Display the result
      imgElement.src = resultDataUrl;
      // save the result as a file
      const link = document.createElement("a");
      link.href = resultDataUrl;
      link.download = "grayscale_image.png";
      // link.click();
      console.log("Image processed and downloaded.");
    } catch (error) {
      console.error("Error processing image:", error);
      alert("Failed to process image. Check console.");
    }
  });
}

run();
