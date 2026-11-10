# Skill-Seekers_Docs - Rag

**Pages:** 3

---

## RAG & Vector Databases | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/integrations/rag

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

Build production RAG systems that transform any source into searchable knowledge.

Retrieval-Augmented Generation = Vector Database + Retrieval + LLM

The Problem: 70% of RAG development is data preprocessing.

The Solution: Skill Seekers automates it all—extract, chunk, embed, store.

5-Minute RAG Pipeline →

**Examples:**

Example 1 (sql):
```sql
# From documentation
skill-seekers scrape --format langchain --config react.json

# From GitHub repo
skill-seekers scrape --format langchain --github owner/repo

# From PDF
skill-seekers scrape --format langchain --pdf manual.pdf

# From codebase
skill-seekers analyze --format langchain --directory ./project
```

Example 2 (swift):
```swift
┌─────────────┐     ┌──────────────┐     ┌─────────────┐     ┌─────────┐
│   Source    │────▶│Skill Seekers │────▶│ Vector DB   │────▶│   LLM   │
│(Any Source) │     │(Chunk/Embed) │     │(Pinecone/  │     │(Answer) │
└─────────────┘     └──────────────┘     │ Chroma/etc) │     └─────────┘
                                          └─────────────┘
```

---

## LangChain | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/integrations/rag/langchain

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

Transform any source into LangChain Documents for RAG pipelines.

Each document includes:

**Examples:**

Example 1 (sql):
```sql
# From documentation
skill-seekers scrape --format langchain --config configs/react.json

# From GitHub repo
skill-seekers scrape --format langchain --github https://github.com/facebook/react

# From PDF
skill-seekers scrape --format langchain --pdf ./manual.pdf

# From local codebase
skill-seekers analyze --directory ./my-project --format langchain
```

Example 2 (python):
```python
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings
from langchain.schema import Document
import json

# Load documents from Skill Seekers output
def load_documents(output_dir):
    """Load documents from Skill Seekers LangChain output."""
    documents = []
    with open(f"{output_dir}/documents.json", "r") as f:
        data = json.load(f)
        for doc in data:
            documents.append(Document(
                page_content=doc["content"],
                metadata=doc["metadata"]
            ))
    return documents

# Load documents
documents = load_documents("output/react-langchain/")
print(f"Loaded {len(documents)} documents")

# Create vector store
embeddings = OpenAIEmbeddings()
vectorstore = Chroma.from_documents(
    documents,
    embeddings,
    collection_name="react-docs"
)

# Query
results = vectorstore.similarity_search("How do I use useState?")
print(results[0].page_content)
```

Example 3 (json):
```json
{
  "page_content": "...",
  "metadata": {
    "source": "https://react.dev/docs/hooks-intro",
    "title": "Introducing Hooks",
    "category": "api",
    "language": "javascript"
  }
}
```

Example 4 (python):
```python
from langchain.chains import RetrievalQA
from langchain_openai import ChatOpenAI

# Create QA chain with modern ChatOpenAI
qa_chain = RetrievalQA.from_chain_type(
    llm=ChatOpenAI(model="gpt-4o"),
    chain_type="stuff",
    retriever=vectorstore.as_retriever()
)

# Ask questions
response = qa_chain.invoke({"query": "What are React Hooks?"})
print(response["result"])
```

---

## Haystack | Skill Seekers Docs

**URL:** https://skillseekersweb.com/docs/integrations/rag/haystack

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

Enterprise RAG with Haystack 2.x—production NLP pipelines.

For semantic search with embeddings:

**Examples:**

Example 1 (unknown):
```unknown
skill-seekers scrape --format haystack --config configs/react.json
```

Example 2 (sass):
```sass
pip install haystack-ai>=2.0.0
```

Example 3 (python):
```python
from haystack import Document, Pipeline
from haystack.document_stores.in_memory import InMemoryDocumentStore
from haystack.components.retrievers import InMemoryBM25Retriever
from haystack.components.generators import OpenAIGenerator
from haystack.components.builders import PromptBuilder
import json

# Load documents from Skill Seekers output
def load_documents(output_dir):
    documents = []
    with open(f"{output_dir}/documents.json", "r") as f:
        data = json.load(f)
        for item in data:
            documents.append(Document(
                content=item["content"],
                meta=item.get("metadata", {})
            ))
    return documents

# Create document store and load documents
document_store = InMemoryDocumentStore()
docs = load_documents("output/react-haystack/")
document_store.write_documents(docs)

# Create RAG pipeline
prompt_template = """
Given these documents, answer the question.
Documents:
{% for doc in documents %}
  {{ doc.content }}
{% endfor %}

Question: {{question}}
Answer:
"""

retriever = InMemoryBM25Retriever(document_store=document_store)
prompt_builder = PromptBuilder(template=prompt_template)
llm = OpenAIGenerator(model="gpt-4o")

# Build pipeline
rag_pipeline = Pipeline()
rag_pipeline.add_component("retriever", retriever)
rag_pipeline.add_component("prompt_builder", prompt_builder)
rag_pipeline.add_component("llm", llm)

# Connect components
rag_pipeline.connect("retriever.documents", "prompt_builder.documents")
rag_pipeline.connect("prompt_builder.prompt", "llm.prompt")

# Query
result = rag_pipeline.run(
    {
        "retriever": {"query": "What are React Hooks?"},
        "prompt_builder": {"question": "What are React Hooks?"}
    }
)
print(result["llm"]["replies"][0])
```

Example 4 (lua):
```lua
from haystack.components.embedders import OpenAIDocumentEmbedder, OpenAITextEmbedder
from haystack.components.retrievers import InMemoryEmbeddingRetriever

# Create embedding retriever pipeline
embedding_pipeline = Pipeline()
embedding_pipeline.add_component("embedder", OpenAIDocumentEmbedder())
embedding_pipeline.add_component("retriever", InMemoryEmbeddingRetriever(document_store=document_store))

# First, embed documents
docs_with_embeddings = embedding_pipeline.run({"documents": docs})
document_store.write_documents(docs_with_embeddings["retriever"]["documents"])

# Query with embeddings
query_pipeline = Pipeline()
query_pipeline.add_component("text_embedder", OpenAITextEmbedder())
query_pipeline.add_component("retriever", InMemoryEmbeddingRetriever(document_store=document_store))
query_pipeline.connect("text_embedder.embedding", "retriever.query_embedding")

result = query_pipeline.run({"text_embedder": {"text": "React Hooks"}})
for doc in result["retriever"]["documents"]:
    print(f"Score: {doc.score:.3f} - {doc.content[:200]}...")
```

---
