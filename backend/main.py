from model import model_pipeline
from fastapi import FastAPI, UploadFile, Form, File
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import io

app = FastAPI()

# Enable CORS for all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"message": "Hello World"}

@app.post("/ask")
async def ask(text: str = Form(...), image: UploadFile = File(...)):
    content = await image.read()
    image = Image.open(io.BytesIO(content))
    result = model_pipeline(text=text, image=image)
    return {"Answer": result}
