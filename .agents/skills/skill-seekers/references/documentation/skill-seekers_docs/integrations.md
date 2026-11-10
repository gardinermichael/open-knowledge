# Skill-Seekers_Docs - Integrations

**Pages:** 8

---

## Cursor | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/integrations/coding/cursor

**Contents:**
- Documentation
  - About
  - Getting Started
  - Tutorials
  - Manual
    - Scraping
    - Enhancement
    - MCP
    - Platforms
    - Advanced

Give Cursor IDE complete framework knowledge with .cursorrules.

**Examples:**

Example 1 (sql):
```sql
# From documentation
skill-seekers scrape --target claude --config configs/react.json
cp output/react-claude/.cursorrules ./

# From GitHub repo (better!)
skill-seekers scrape --target claude --github https://github.com/facebook/react
cp output/react-claude/.cursorrules ./
```

Example 2 (unknown):
```unknown
skill-seekers scrape --config configs/react.json --target claude
```

Example 3 (unknown):
```unknown
cp output/react-claude/.cursorrules ./my-project/
```

Example 4 (lua):
```lua
function handleClick() {
  // Generic suggestion...
}
```

---

## Chroma | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/integrations/rag/chroma

**Contents:**
- Documentation
  - About
  - Getting Started
  - Tutorials
  - Manual
    - Scraping
    - Enhancement
    - MCP
    - Platforms
    - Advanced

Direct export to Chroma vector database—perfect for local development.

**Examples:**

Example 1 (unknown):
```unknown
skill-seekers scrape --format chroma --config configs/react.json
```

Example 2 (sass):
```sass
import chromadb

# Connect to Chroma
client = chromadb.PersistentClient(path="./chroma_db")

# Get collection
collection = client.get_collection("react-docs")

# Query
results = collection.query(
    query_texts=["How do I use useState?"],
    n_results=3
)

print(results['documents'][0])
```

Example 3 (sass):
```sass
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings

vectorstore = Chroma(
    collection_name="react-docs",
    embedding_function=OpenAIEmbeddings(),
    persist_directory="./chroma_db"
)

results = vectorstore.similarity_search("React Hooks")
```

---

## Pinecone | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/integrations/rag/pinecone

**Contents:**
- Documentation
  - About
  - Getting Started
  - Tutorials
  - Manual
    - Scraping
    - Enhancement
    - MCP
    - Platforms
    - Advanced

Production-ready vector search with Pinecone cloud database.

Get API Key from Pinecone Console

Install dependencies:

**Examples:**

Example 1 (unknown):
```unknown
skill-seekers scrape --format pinecone --config configs/react.json
```

Example 2 (unknown):
```unknown
pip install pinecone-client
```

Example 3 (typescript):
```typescript
from pinecone import Pinecone, ServerlessSpec
import json

# Initialize
pc = Pinecone(api_key="your-api-key")

# Create index
index = pc.Index("react-docs")

# Load and upsert data
with open("output/react-pinecone.json") as f:
    data = json.load(f)
    
index.upsert(vectors=data)
```

Example 4 (sass):
```sass
# Query
results = index.query(
    vector=embedding,
    top_k=5,
    filter={"category": "api"}
)
```

---

## LlamaIndex | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/integrations/rag/llamaindex

**Contents:**
- Documentation
  - About
  - Getting Started
  - Tutorials
  - Manual
    - Scraping
    - Enhancement
    - MCP
    - Platforms
    - Advanced

Transform any source into LlamaIndex TextNodes for query engines and chatbots.

**Examples:**

Example 1 (sql):
```sql
# From any source
skill-seekers scrape --format llama-index --config configs/react.json
```

Example 2 (swift):
```swift
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader

# Load documents
reader = SimpleDirectoryReader("output/react-llama-index/")
documents = reader.load_data()

# Create index
index = VectorStoreIndex.from_documents(documents)

# Create query engine
query_engine = index.as_query_engine()

# Query
response = query_engine.query("What are React Hooks?")
print(response)
```

Example 3 (sql):
```sql
# Chat engine is accessed directly from the index
chat_engine = index.as_chat_engine()
response = chat_engine.chat("Explain useEffect")
print(response)
```

---

## Windsurf | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/integrations/coding/windsurf

**Contents:**
- Documentation
  - About
  - Getting Started
  - Tutorials
  - Manual
    - Scraping
    - Enhancement
    - MCP
    - Platforms
    - Advanced

Give Windsurf IDE framework knowledge with .windsurfrules.

Windsurf has a 12K limit. For large frameworks:

**Examples:**

Example 1 (unknown):
```unknown
skill-seekers scrape --target claude --config configs/react.json
cp output/react-claude/.windsurfrules ./
```

Example 2 (unknown):
```unknown
skill-seekers scrape --config configs/react.json --target claude
```

Example 3 (unknown):
```unknown
cp output/react-claude/.windsurfrules ./my-project/
```

---

## Weaviate | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/integrations/rag/weaviate

**Contents:**
- Documentation
  - About
  - Getting Started
  - Tutorials
  - Manual
    - Scraping
    - Enhancement
    - MCP
    - Platforms
    - Advanced

Enterprise vector search with Weaviate—GraphQL interface and modular AI.

For production, use Weaviate Cloud:

**Examples:**

Example 1 (unknown):
```unknown
skill-seekers scrape --format weaviate --config configs/react.json
```

Example 2 (sass):
```sass
pip install weaviate-client>=4.0.0
```

Example 3 (typescript):
```typescript
import weaviate
import json

# Connect to local Weaviate
client = weaviate.connect_to_local()

# Load data
with open("output/react-weaviate.json") as f:
    data = json.load(f)

# Create collection if it doesn't exist
from weaviate.classes.config import Configure, Property, DataType

if not client.collections.exists("ReactDoc"):
    client.collections.create(
        name="ReactDoc",
        vectorizer_config=Configure.Vectorizer.none(),  # We'll provide vectors
        properties=[
            Property(name="content", data_type=DataType.TEXT),
            Property(name="category", data_type=DataType.TEXT),
            Property(name="source", data_type=DataType.TEXT),
        ]
    )

# Get collection
collection = client.collections.get("ReactDoc")

# Import data with embeddings
with collection.batch.dynamic() as batch:
    for item in data:
        batch.add_object(
            properties={
                "content": item["content"],
                "category": item.get("category", ""),
                "source": item.get("source", "")
            },
            vector=item["embedding"]
        )

client.close()
```

Example 4 (lua):
```lua
import weaviate

client = weaviate.connect_to_local()
collection = client.collections.get("ReactDoc")

# Vector search
response = collection.query.near_text(
    query="React Hooks",
    limit=3,
    return_properties=["content", "category", "source"]
)

for obj in response.objects:
    print(f"Content: {obj.properties['content'][:200]}...")
    print(f"Category: {obj.properties['category']}")
    print("---")

client.close()
```

---

## Qdrant | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/integrations/rag/qdrant

**Contents:**
- Documentation
  - About
  - Getting Started
  - Tutorials
  - Manual
    - Scraping
    - Enhancement
    - MCP
    - Platforms
    - Advanced

High-performance vector search with Qdrant—Rust engine, advanced filtering.

**Examples:**

Example 1 (unknown):
```unknown
skill-seekers scrape --format qdrant --config configs/react.json
```

Example 2 (unknown):
```unknown
pip install qdrant-client
```

Example 3 (typescript):
```typescript
from qdrant_client import QdrantClient
import json

# Connect
client = QdrantClient(host="localhost", port=6333)

# Load and upload
with open("output/react-qdrant.json") as f:
    data = json.load(f)
    
client.upsert(
    collection_name="react-docs",
    points=data
)
```

Example 4 (sass):
```sass
from qdrant_client.models import Filter, FieldCondition, Match

# Search with filter
results = client.search(
    collection_name="react-docs",
    query_vector=embedding,
    query_filter=Filter(
        must=[FieldCondition(
            key="category",
            match=Match(value="api")
        )]
    ),
    limit=5
)
```

---

## FAISS | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/integrations/rag/faiss

**Contents:**
- Documentation
  - About
  - Getting Started
  - Tutorials
  - Manual
    - Scraping
    - Enhancement
    - MCP
    - Platforms
    - Advanced

Facebook AI Similarity Search—high-performance local vector search.

**Examples:**

Example 1 (unknown):
```unknown
skill-seekers scrape --format faiss --config configs/react.json
```

Example 2 (unknown):
```unknown
pip install faiss-cpu  # or faiss-gpu
```

Example 3 (typescript):
```typescript
import faiss
import numpy as np
import json

# Load data
with open("output/react-faiss.json") as f:
    data = json.load(f)

# Build index
dimension = 1536  # OpenAI embedding size
index = faiss.IndexFlatL2(dimension)

# Add vectors
vectors = np.array([d['vector'] for d in data]).astype('float32')
index.add(vectors)

# Search
query = np.random.random((1, dimension)).astype('float32')
distances, indices = index.search(query, k=5)

print(f"Nearest neighbors: {indices[0]}")
```

---
