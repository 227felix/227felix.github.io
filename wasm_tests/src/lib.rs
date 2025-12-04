use base64::{engine::general_purpose, Engine as _};
use image::load_from_memory;
use std::io::Cursor;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn apply_grayscale(image_data: &[u8]) -> Result<String, JsValue> {
    // 1. Load the image from raw bytes (decodes PNG/JPG)
    let img = load_from_memory(image_data).map_err(|e| JsValue::from_str(&e.to_string()))?;

    // 2. Perform image processing (Grayscale)
    let grayscale_img = img.grayscale();
    let grayscale_img= img.blur(0.95);

    // 3. Write the result back to a buffer (in memory) as PNG
    let mut buffer = Vec::new();
    grayscale_img
        .write_to(&mut Cursor::new(&mut buffer), image::ImageOutputFormat::Png)
        .map_err(|e| JsValue::from_str(&e.to_string()))?;

    // 4. Encode the buffer as Base64 so JS can display it
    let encoded_img = general_purpose::STANDARD.encode(&buffer);

    // 5. Add the data URI prefix
    let data_url = format!("data:image/png;base64,{}", encoded_img);

    Ok(data_url)
}
