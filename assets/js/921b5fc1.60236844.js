"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[7462],{36875:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>h,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=s(74848),t=s(28453);const i={title:"Embedding Models",sidebar_position:6,slug:"/components-embedding-models"},r="Embedding Models",l={id:"Components/components-embedding-models",title:"Embedding Models",description:"Embeddings models are used to convert text into numerical vectors. These vectors can be used for various tasks such as similarity search, clustering, and classification.",source:"@site/docs/Components/components-embedding-models.md",sourceDirName:"Components",slug:"/components-embedding-models",permalink:"/components-embedding-models",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Embedding Models",sidebar_position:6,slug:"/components-embedding-models"},sidebar:"docs",previous:{title:"Data",permalink:"/components-data"},next:{title:"Helpers",permalink:"/components-helpers"}},h={},c=[{value:"AI/ML",id:"aiml",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Inputs",id:"inputs",level:4},{value:"Outputs",id:"outputs",level:4},{value:"Amazon Bedrock Embeddings",id:"amazon-bedrock-embeddings",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Inputs",id:"inputs-1",level:4},{value:"Outputs",id:"outputs-1",level:4},{value:"Astra DB vectorize",id:"astra-db-vectorize",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Inputs",id:"inputs-2",level:4},{value:"Outputs",id:"outputs-2",level:4},{value:"Azure OpenAI Embeddings",id:"azure-openai-embeddings",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Inputs",id:"inputs-3",level:4},{value:"Outputs",id:"outputs-3",level:4},{value:"Cohere Embeddings",id:"cohere-embeddings",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Inputs",id:"inputs-4",level:4},{value:"Outputs",id:"outputs-4",level:4},{value:"Embedding similarity",id:"embedding-similarity",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"Inputs",id:"inputs-5",level:4},{value:"Outputs",id:"outputs-5",level:4},{value:"Google generative AI embeddings",id:"google-generative-ai-embeddings",level:2},{value:"Parameters",id:"parameters-6",level:3},{value:"Inputs",id:"inputs-6",level:4},{value:"Outputs",id:"outputs-6",level:4},{value:"Hugging Face Embeddings",id:"hugging-face-embeddings",level:2},{value:"Parameters",id:"parameters-7",level:3},{value:"Inputs",id:"inputs-7",level:4},{value:"Hugging Face embeddings Inference API",id:"hugging-face-embeddings-inference-api",level:2},{value:"Parameters",id:"parameters-8",level:3},{value:"Inputs",id:"inputs-8",level:4},{value:"MistralAI",id:"mistralai",level:2},{value:"Parameters",id:"parameters-9",level:3},{value:"Inputs",id:"inputs-9",level:4},{value:"Outputs",id:"outputs-7",level:4},{value:"NVIDIA",id:"nvidia",level:2},{value:"Parameters",id:"parameters-10",level:3},{value:"Inputs",id:"inputs-10",level:4},{value:"Outputs",id:"outputs-8",level:4},{value:"Ollama Embeddings",id:"ollama-embeddings",level:2},{value:"Parameters",id:"parameters-11",level:3},{value:"Inputs",id:"inputs-11",level:4},{value:"Outputs",id:"outputs-9",level:4},{value:"OpenAI Embeddings",id:"openai-embeddings",level:2},{value:"Parameters",id:"parameters-12",level:3},{value:"Inputs",id:"inputs-12",level:4},{value:"Outputs",id:"outputs-10",level:4},{value:"Text embedder",id:"text-embedder",level:2},{value:"Parameters",id:"parameters-13",level:3},{value:"Inputs",id:"inputs-13",level:4},{value:"Outputs",id:"outputs-11",level:4},{value:"VertexAI Embeddings",id:"vertexai-embeddings",level:2},{value:"Parameters",id:"parameters-14",level:3},{value:"Inputs",id:"inputs-14",level:4},{value:"Outputs",id:"outputs-12",level:4}];function a(e){const d={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.header,{children:(0,n.jsx)(d.h1,{id:"embedding-models",children:"Embedding Models"})}),"\n",(0,n.jsx)(d.p,{children:"Embeddings models are used to convert text into numerical vectors. These vectors can be used for various tasks such as similarity search, clustering, and classification."}),"\n",(0,n.jsx)(d.h2,{id:"aiml",children:"AI/ML"}),"\n",(0,n.jsxs)(d.p,{children:["This component generates embeddings using the ",(0,n.jsx)(d.a,{href:"https://docs.aimlapi.com/api-overview/embeddings",children:"AI/ML API"}),"."]}),"\n",(0,n.jsx)(d.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(d.h4,{id:"inputs",children:"Inputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"model_name"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsx)(d.td,{children:"The name of the AI/ML embedding model to use"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"aiml_api_key"}),(0,n.jsx)(d.td,{children:"SecretString"}),(0,n.jsx)(d.td,{children:"API key for authenticating with the AI/ML service"})]})]})]}),"\n",(0,n.jsx)(d.h4,{id:"outputs",children:"Outputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsx)(d.tbody,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"embeddings"}),(0,n.jsx)(d.td,{children:"Embeddings"}),(0,n.jsx)(d.td,{children:"An instance of AIMLEmbeddingsImpl for generating embeddings"})]})})]}),"\n",(0,n.jsx)(d.h2,{id:"amazon-bedrock-embeddings",children:"Amazon Bedrock Embeddings"}),"\n",(0,n.jsxs)(d.p,{children:["This component is used to load embedding models from ",(0,n.jsx)(d.a,{href:"https://aws.amazon.com/bedrock/",children:"Amazon Bedrock"}),"."]}),"\n",(0,n.jsx)(d.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsx)(d.h4,{id:"inputs-1",children:"Inputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"credentials_profile_name"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsx)(d.td,{children:"Name of the AWS credentials profile in ~/.aws/credentials or ~/.aws/config, which has access keys or role information"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"model_id"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsxs)(d.td,{children:["ID of the model to call, e.g., ",(0,n.jsx)(d.code,{children:"amazon.titan-embed-text-v1"}),". This is equivalent to the ",(0,n.jsx)(d.code,{children:"modelId"})," property in the ",(0,n.jsx)(d.code,{children:"list-foundation-models"})," API"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"endpoint_url"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsx)(d.td,{children:"URL to set a specific service endpoint other than the default AWS endpoint"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"region_name"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsxs)(d.td,{children:["AWS region to use, e.g., ",(0,n.jsx)(d.code,{children:"us-west-2"}),". Falls back to ",(0,n.jsx)(d.code,{children:"AWS_DEFAULT_REGION"})," environment variable or region specified in ~/.aws/config if not provided"]})]})]})]}),"\n",(0,n.jsx)(d.h4,{id:"outputs-1",children:"Outputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsx)(d.tbody,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"embeddings"}),(0,n.jsx)(d.td,{children:"Embeddings"}),(0,n.jsx)(d.td,{children:"An instance for generating embeddings using Amazon Bedrock"})]})})]}),"\n",(0,n.jsx)(d.h2,{id:"astra-db-vectorize",children:"Astra DB vectorize"}),"\n",(0,n.jsxs)(d.p,{children:["Connect this component to the ",(0,n.jsx)(d.strong,{children:"Embeddings"})," port of the ",(0,n.jsx)(d.a,{href:"components-vector-stores#astra-db-serverless",children:"Astra DB vector store component"})," to generate embeddings."]}),"\n",(0,n.jsxs)(d.p,{children:["This component requires that your Astra DB database has a collection that uses a vectorize embedding provider integration.\nFor more information and instructions, see ",(0,n.jsx)(d.a,{href:"https://docs.datastax.com/en/astra-db-serverless/databases/embedding-generation.html",children:"Embedding Generation"}),"."]}),"\n",(0,n.jsx)(d.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsx)(d.h4,{id:"inputs-2",children:"Inputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Display Name"}),(0,n.jsx)(d.th,{children:"Info"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"provider"}),(0,n.jsx)(d.td,{children:"Embedding Provider"}),(0,n.jsx)(d.td,{children:"The embedding provider to use"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"model_name"}),(0,n.jsx)(d.td,{children:"Model Name"}),(0,n.jsx)(d.td,{children:"The embedding model to use"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"authentication"}),(0,n.jsx)(d.td,{children:"Authentication"}),(0,n.jsxs)(d.td,{children:["The name of the API key in Astra that stores your ",(0,n.jsx)(d.a,{href:"https://docs.datastax.com/en/astra-db-serverless/databases/embedding-generation.html#embedding-provider-authentication",children:"vectorize embedding provider credentials"}),". (Not required if using an ",(0,n.jsx)(d.a,{href:"https://docs.datastax.com/en/astra-db-serverless/databases/embedding-generation.html#supported-embedding-providers",children:"Astra-hosted embedding provider"}),".)"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"provider_api_key"}),(0,n.jsx)(d.td,{children:"Provider API Key"}),(0,n.jsxs)(d.td,{children:["As an alternative to ",(0,n.jsx)(d.code,{children:"authentication"}),", directly provide your embedding provider credentials."]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"model_parameters"}),(0,n.jsx)(d.td,{children:"Model Parameters"}),(0,n.jsx)(d.td,{children:"Additional model parameters"})]})]})]}),"\n",(0,n.jsx)(d.h4,{id:"outputs-2",children:"Outputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsx)(d.tbody,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"embeddings"}),(0,n.jsx)(d.td,{children:"Embeddings"}),(0,n.jsx)(d.td,{children:"An instance for generating embeddings using Astra vectorize"})]})})]}),"\n",(0,n.jsx)(d.h2,{id:"azure-openai-embeddings",children:"Azure OpenAI Embeddings"}),"\n",(0,n.jsx)(d.p,{children:"This component generates embeddings using Azure OpenAI models."}),"\n",(0,n.jsx)(d.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsx)(d.h4,{id:"inputs-3",children:"Inputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Model"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsxs)(d.td,{children:["Name of the model to use (default: ",(0,n.jsx)(d.code,{children:"text-embedding-3-small"}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Azure Endpoint"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsxs)(d.td,{children:["Your Azure endpoint, including the resource. Example: ",(0,n.jsx)(d.code,{children:"https://example-resource.azure.openai.com/"})]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Deployment Name"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsx)(d.td,{children:"The name of the deployment"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"API Version"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsx)(d.td,{children:"The API version to use, options include various dates"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"API Key"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsx)(d.td,{children:"The API key to access the Azure OpenAI service"})]})]})]}),"\n",(0,n.jsx)(d.h4,{id:"outputs-3",children:"Outputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsx)(d.tbody,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"embeddings"}),(0,n.jsx)(d.td,{children:"Embeddings"}),(0,n.jsx)(d.td,{children:"An instance for generating embeddings using Azure OpenAI"})]})})]}),"\n",(0,n.jsx)(d.h2,{id:"cohere-embeddings",children:"Cohere Embeddings"}),"\n",(0,n.jsxs)(d.p,{children:["This component is used to load embedding models from ",(0,n.jsx)(d.a,{href:"https://cohere.com/",children:"Cohere"}),"."]}),"\n",(0,n.jsx)(d.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsx)(d.h4,{id:"inputs-4",children:"Inputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"cohere_api_key"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsx)(d.td,{children:"API key required to authenticate with the Cohere service"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"model"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsxs)(d.td,{children:["Language model used for embedding text documents and performing queries (default: ",(0,n.jsx)(d.code,{children:"embed-english-v2.0"}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"truncate"}),(0,n.jsx)(d.td,{children:"Boolean"}),(0,n.jsxs)(d.td,{children:["Whether to truncate the input text to fit within the model's constraints (default: ",(0,n.jsx)(d.code,{children:"False"}),")"]})]})]})]}),"\n",(0,n.jsx)(d.h4,{id:"outputs-4",children:"Outputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsx)(d.tbody,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"embeddings"}),(0,n.jsx)(d.td,{children:"Embeddings"}),(0,n.jsx)(d.td,{children:"An instance for generating embeddings using Cohere"})]})})]}),"\n",(0,n.jsx)(d.h2,{id:"embedding-similarity",children:"Embedding similarity"}),"\n",(0,n.jsx)(d.p,{children:"This component computes selected forms of similarity between two embedding vectors."}),"\n",(0,n.jsx)(d.h3,{id:"parameters-5",children:"Parameters"}),"\n",(0,n.jsx)(d.h4,{id:"inputs-5",children:"Inputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Display Name"}),(0,n.jsx)(d.th,{children:"Info"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"embedding_vectors"}),(0,n.jsx)(d.td,{children:"Embedding Vectors"}),(0,n.jsx)(d.td,{children:"A list containing exactly two data objects with embedding vectors to compare."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"similarity_metric"}),(0,n.jsx)(d.td,{children:"Similarity Metric"}),(0,n.jsx)(d.td,{children:'Select the similarity metric to use. Options: "Cosine Similarity", "Euclidean Distance", "Manhattan Distance".'})]})]})]}),"\n",(0,n.jsx)(d.h4,{id:"outputs-5",children:"Outputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Display Name"}),(0,n.jsx)(d.th,{children:"Info"})]})}),(0,n.jsx)(d.tbody,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"similarity_data"}),(0,n.jsx)(d.td,{children:"Similarity Data"}),(0,n.jsx)(d.td,{children:"Data object containing the computed similarity score and additional information."})]})})]}),"\n",(0,n.jsx)(d.h2,{id:"google-generative-ai-embeddings",children:"Google generative AI embeddings"}),"\n",(0,n.jsxs)(d.p,{children:["This component connects to Google's generative AI embedding service using the GoogleGenerativeAIEmbeddings class from the ",(0,n.jsx)(d.code,{children:"langchain-google-genai"})," package."]}),"\n",(0,n.jsx)(d.h3,{id:"parameters-6",children:"Parameters"}),"\n",(0,n.jsx)(d.h4,{id:"inputs-6",children:"Inputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Display Name"}),(0,n.jsx)(d.th,{children:"Info"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"api_key"}),(0,n.jsx)(d.td,{children:"API Key"}),(0,n.jsx)(d.td,{children:"Secret API key for accessing Google's generative AI service (required)"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"model_name"}),(0,n.jsx)(d.td,{children:"Model Name"}),(0,n.jsx)(d.td,{children:'Name of the embedding model to use (default: "models/text-embedding-004")'})]})]})]}),"\n",(0,n.jsx)(d.h4,{id:"outputs-6",children:"Outputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Display Name"}),(0,n.jsx)(d.th,{children:"Info"})]})}),(0,n.jsx)(d.tbody,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"embeddings"}),(0,n.jsx)(d.td,{children:"Embeddings"}),(0,n.jsx)(d.td,{children:"Built GoogleGenerativeAIEmbeddings object"})]})})]}),"\n",(0,n.jsx)(d.h2,{id:"hugging-face-embeddings",children:"Hugging Face Embeddings"}),"\n",(0,n.jsx)(d.admonition,{type:"note",children:(0,n.jsxs)(d.p,{children:["This component is deprecated as of Langflow version 1.0.18.\nInstead, use the ",(0,n.jsx)(d.a,{href:"#hugging-face-embeddings-inference-api",children:"Hugging Face API Embeddings component"}),"."]})}),"\n",(0,n.jsx)(d.p,{children:"This component loads embedding models from HuggingFace."}),"\n",(0,n.jsx)(d.p,{children:"Use this component to generate embeddings using locally downloaded Hugging Face models. Ensure you have sufficient computational resources to run the models."}),"\n",(0,n.jsx)(d.h3,{id:"parameters-7",children:"Parameters"}),"\n",(0,n.jsx)(d.h4,{id:"inputs-7",children:"Inputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Display Name"}),(0,n.jsx)(d.th,{children:"Info"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Cache Folder"}),(0,n.jsx)(d.td,{children:"Cache Folder"}),(0,n.jsx)(d.td,{children:"Folder path to cache HuggingFace models"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Encode Kwargs"}),(0,n.jsx)(d.td,{children:"Encoding Arguments"}),(0,n.jsx)(d.td,{children:"Additional arguments for the encoding process"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Model Kwargs"}),(0,n.jsx)(d.td,{children:"Model Arguments"}),(0,n.jsx)(d.td,{children:"Additional arguments for the model"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Model Name"}),(0,n.jsx)(d.td,{children:"Model Name"}),(0,n.jsx)(d.td,{children:"Name of the HuggingFace model to use"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Multi Process"}),(0,n.jsx)(d.td,{children:"Multi-Process"}),(0,n.jsx)(d.td,{children:"Whether to use multiple processes"})]})]})]}),"\n",(0,n.jsx)(d.h2,{id:"hugging-face-embeddings-inference-api",children:"Hugging Face embeddings Inference API"}),"\n",(0,n.jsx)(d.p,{children:"This component generates embeddings using Hugging Face Inference API models."}),"\n",(0,n.jsx)(d.p,{children:"Use this component to create embeddings with Hugging Face's hosted models. Ensure you have a valid Hugging Face API key."}),"\n",(0,n.jsx)(d.h3,{id:"parameters-8",children:"Parameters"}),"\n",(0,n.jsx)(d.h4,{id:"inputs-8",children:"Inputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Display Name"}),(0,n.jsx)(d.th,{children:"Info"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"API Key"}),(0,n.jsx)(d.td,{children:"API Key"}),(0,n.jsx)(d.td,{children:"API key for accessing the Hugging Face Inference API"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"API URL"}),(0,n.jsx)(d.td,{children:"API URL"}),(0,n.jsx)(d.td,{children:"URL of the Hugging Face Inference API"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Model Name"}),(0,n.jsx)(d.td,{children:"Model Name"}),(0,n.jsx)(d.td,{children:"Name of the model to use for embeddings"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Cache Folder"}),(0,n.jsx)(d.td,{children:"Cache Folder"}),(0,n.jsx)(d.td,{children:"Folder path to cache Hugging Face models"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Encode Kwargs"}),(0,n.jsx)(d.td,{children:"Encoding Arguments"}),(0,n.jsx)(d.td,{children:"Additional arguments for the encoding process"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Model Kwargs"}),(0,n.jsx)(d.td,{children:"Model Arguments"}),(0,n.jsx)(d.td,{children:"Additional arguments for the model"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Multi Process"}),(0,n.jsx)(d.td,{children:"Multi-Process"}),(0,n.jsx)(d.td,{children:"Whether to use multiple processes"})]})]})]}),"\n",(0,n.jsx)(d.h2,{id:"mistralai",children:"MistralAI"}),"\n",(0,n.jsx)(d.p,{children:"This component generates embeddings using MistralAI models."}),"\n",(0,n.jsx)(d.h3,{id:"parameters-9",children:"Parameters"}),"\n",(0,n.jsx)(d.h4,{id:"inputs-9",children:"Inputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"model"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsx)(d.td,{children:'The MistralAI model to use (default: "mistral-embed")'})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"mistral_api_key"}),(0,n.jsx)(d.td,{children:"SecretString"}),(0,n.jsx)(d.td,{children:"API key for authenticating with MistralAI"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"max_concurrent_requests"}),(0,n.jsx)(d.td,{children:"Integer"}),(0,n.jsx)(d.td,{children:"Maximum number of concurrent API requests (default: 64)"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"max_retries"}),(0,n.jsx)(d.td,{children:"Integer"}),(0,n.jsx)(d.td,{children:"Maximum number of retry attempts for failed requests (default: 5)"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"timeout"}),(0,n.jsx)(d.td,{children:"Integer"}),(0,n.jsx)(d.td,{children:"Request timeout in seconds (default: 120)"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"endpoint"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsxs)(d.td,{children:['Custom API endpoint URL (default: "',(0,n.jsx)(d.a,{href:"https://api.mistral.ai/v1/",children:"https://api.mistral.ai/v1/"}),'")']})]})]})]}),"\n",(0,n.jsx)(d.h4,{id:"outputs-7",children:"Outputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsx)(d.tbody,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"embeddings"}),(0,n.jsx)(d.td,{children:"Embeddings"}),(0,n.jsx)(d.td,{children:"MistralAIEmbeddings instance for generating embeddings"})]})})]}),"\n",(0,n.jsx)(d.h2,{id:"nvidia",children:"NVIDIA"}),"\n",(0,n.jsx)(d.p,{children:"This component generates embeddings using NVIDIA models."}),"\n",(0,n.jsx)(d.h3,{id:"parameters-10",children:"Parameters"}),"\n",(0,n.jsx)(d.h4,{id:"inputs-10",children:"Inputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"model"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsx)(d.td,{children:"The NVIDIA model to use for embeddings (e.g., nvidia/nv-embed-v1)"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"base_url"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsxs)(d.td,{children:["Base URL for the NVIDIA API (default: ",(0,n.jsx)(d.a,{href:"https://integrate.api.nvidia.com/v1",children:"https://integrate.api.nvidia.com/v1"}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"nvidia_api_key"}),(0,n.jsx)(d.td,{children:"SecretString"}),(0,n.jsx)(d.td,{children:"API key for authenticating with NVIDIA's service"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"temperature"}),(0,n.jsx)(d.td,{children:"Float"}),(0,n.jsx)(d.td,{children:"Model temperature for embedding generation (default: 0.1)"})]})]})]}),"\n",(0,n.jsx)(d.h4,{id:"outputs-8",children:"Outputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsx)(d.tbody,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"embeddings"}),(0,n.jsx)(d.td,{children:"Embeddings"}),(0,n.jsx)(d.td,{children:"NVIDIAEmbeddings instance for generating embeddings"})]})})]}),"\n",(0,n.jsx)(d.h2,{id:"ollama-embeddings",children:"Ollama Embeddings"}),"\n",(0,n.jsx)(d.p,{children:"This component generates embeddings using Ollama models."}),"\n",(0,n.jsx)(d.h3,{id:"parameters-11",children:"Parameters"}),"\n",(0,n.jsx)(d.h4,{id:"inputs-11",children:"Inputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Ollama Model"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsxs)(d.td,{children:["Name of the Ollama model to use (default: ",(0,n.jsx)(d.code,{children:"llama2"}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Ollama Base URL"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsxs)(d.td,{children:["Base URL of the Ollama API (default: ",(0,n.jsx)(d.code,{children:"http://localhost:11434"}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Model Temperature"}),(0,n.jsx)(d.td,{children:"Float"}),(0,n.jsx)(d.td,{children:"Temperature parameter for the model. Adjusts the randomness in the generated embeddings"})]})]})]}),"\n",(0,n.jsx)(d.h4,{id:"outputs-9",children:"Outputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsx)(d.tbody,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"embeddings"}),(0,n.jsx)(d.td,{children:"Embeddings"}),(0,n.jsx)(d.td,{children:"An instance for generating embeddings using Ollama"})]})})]}),"\n",(0,n.jsx)(d.h2,{id:"openai-embeddings",children:"OpenAI Embeddings"}),"\n",(0,n.jsxs)(d.p,{children:["This component is used to load embedding models from ",(0,n.jsx)(d.a,{href:"https://openai.com/",children:"OpenAI"}),"."]}),"\n",(0,n.jsx)(d.h3,{id:"parameters-12",children:"Parameters"}),"\n",(0,n.jsx)(d.h4,{id:"inputs-12",children:"Inputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"OpenAI API Key"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsx)(d.td,{children:"The API key to use for accessing the OpenAI API"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Default Headers"}),(0,n.jsx)(d.td,{children:"Dict"}),(0,n.jsx)(d.td,{children:"Default headers for the HTTP requests"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Default Query"}),(0,n.jsx)(d.td,{children:"NestedDict"}),(0,n.jsx)(d.td,{children:"Default query parameters for the HTTP requests"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Allowed Special"}),(0,n.jsx)(d.td,{children:"List"}),(0,n.jsxs)(d.td,{children:["Special tokens allowed for processing (default: ",(0,n.jsx)(d.code,{children:"[]"}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Disallowed Special"}),(0,n.jsx)(d.td,{children:"List"}),(0,n.jsxs)(d.td,{children:["Special tokens disallowed for processing (default: ",(0,n.jsx)(d.code,{children:'["all"]'}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Chunk Size"}),(0,n.jsx)(d.td,{children:"Integer"}),(0,n.jsxs)(d.td,{children:["Chunk size for processing (default: ",(0,n.jsx)(d.code,{children:"1000"}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Client"}),(0,n.jsx)(d.td,{children:"Any"}),(0,n.jsx)(d.td,{children:"HTTP client for making requests"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Deployment"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsxs)(d.td,{children:["Deployment name for the model (default: ",(0,n.jsx)(d.code,{children:"text-embedding-3-small"}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Embedding Context Length"}),(0,n.jsx)(d.td,{children:"Integer"}),(0,n.jsxs)(d.td,{children:["Length of embedding context (default: ",(0,n.jsx)(d.code,{children:"8191"}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Max Retries"}),(0,n.jsx)(d.td,{children:"Integer"}),(0,n.jsxs)(d.td,{children:["Maximum number of retries for failed requests (default: ",(0,n.jsx)(d.code,{children:"6"}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Model"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsxs)(d.td,{children:["Name of the model to use (default: ",(0,n.jsx)(d.code,{children:"text-embedding-3-small"}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Model Kwargs"}),(0,n.jsx)(d.td,{children:"NestedDict"}),(0,n.jsx)(d.td,{children:"Additional keyword arguments for the model"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"OpenAI API Base"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsx)(d.td,{children:"Base URL of the OpenAI API"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"OpenAI API Type"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsx)(d.td,{children:"Type of the OpenAI API"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"OpenAI API Version"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsx)(d.td,{children:"Version of the OpenAI API"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"OpenAI Organization"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsx)(d.td,{children:"Organization associated with the API key"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"OpenAI Proxy"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsx)(d.td,{children:"Proxy server for the requests"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Request Timeout"}),(0,n.jsx)(d.td,{children:"Float"}),(0,n.jsx)(d.td,{children:"Timeout for the HTTP requests"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Show Progress Bar"}),(0,n.jsx)(d.td,{children:"Boolean"}),(0,n.jsxs)(d.td,{children:["Whether to show a progress bar for processing (default: ",(0,n.jsx)(d.code,{children:"False"}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"Skip Empty"}),(0,n.jsx)(d.td,{children:"Boolean"}),(0,n.jsxs)(d.td,{children:["Whether to skip empty inputs (default: ",(0,n.jsx)(d.code,{children:"False"}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"TikToken Enable"}),(0,n.jsx)(d.td,{children:"Boolean"}),(0,n.jsxs)(d.td,{children:["Whether to enable TikToken (default: ",(0,n.jsx)(d.code,{children:"True"}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"TikToken Model Name"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsx)(d.td,{children:"Name of the TikToken model"})]})]})]}),"\n",(0,n.jsx)(d.h4,{id:"outputs-10",children:"Outputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsx)(d.tbody,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"embeddings"}),(0,n.jsx)(d.td,{children:"Embeddings"}),(0,n.jsx)(d.td,{children:"An instance for generating embeddings using OpenAI"})]})})]}),"\n",(0,n.jsx)(d.h2,{id:"text-embedder",children:"Text embedder"}),"\n",(0,n.jsx)(d.p,{children:"This component generates embeddings for a given message using a specified embedding model."}),"\n",(0,n.jsx)(d.h3,{id:"parameters-13",children:"Parameters"}),"\n",(0,n.jsx)(d.h4,{id:"inputs-13",children:"Inputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Display Name"}),(0,n.jsx)(d.th,{children:"Info"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"embedding_model"}),(0,n.jsx)(d.td,{children:"Embedding Model"}),(0,n.jsx)(d.td,{children:"The embedding model to use for generating embeddings."})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"message"}),(0,n.jsx)(d.td,{children:"Message"}),(0,n.jsx)(d.td,{children:"The message for which to generate embeddings."})]})]})]}),"\n",(0,n.jsx)(d.h4,{id:"outputs-11",children:"Outputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Display Name"}),(0,n.jsx)(d.th,{children:"Info"})]})}),(0,n.jsx)(d.tbody,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"embeddings"}),(0,n.jsx)(d.td,{children:"Embedding Data"}),(0,n.jsx)(d.td,{children:"Data object containing the original text and its embedding vector."})]})})]}),"\n",(0,n.jsx)(d.h2,{id:"vertexai-embeddings",children:"VertexAI Embeddings"}),"\n",(0,n.jsxs)(d.p,{children:["This component is a wrapper around ",(0,n.jsx)(d.a,{href:"https://cloud.google.com/vertex-ai",children:"Google Vertex AI"})," ",(0,n.jsx)(d.a,{href:"https://cloud.google.com/vertex-ai/docs/generative-ai/embeddings/get-text-embeddings",children:"Embeddings API"}),"."]}),"\n",(0,n.jsx)(d.h3,{id:"parameters-14",children:"Parameters"}),"\n",(0,n.jsx)(d.h4,{id:"inputs-14",children:"Inputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"credentials"}),(0,n.jsx)(d.td,{children:"Credentials"}),(0,n.jsx)(d.td,{children:"The default custom credentials to use"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"location"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsxs)(d.td,{children:["The default location to use when making API calls (default: ",(0,n.jsx)(d.code,{children:"us-central1"}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"max_output_tokens"}),(0,n.jsx)(d.td,{children:"Integer"}),(0,n.jsxs)(d.td,{children:["Token limit determines the maximum amount of text output from one prompt (default: ",(0,n.jsx)(d.code,{children:"128"}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"model_name"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsxs)(d.td,{children:["The name of the Vertex AI large language model (default: ",(0,n.jsx)(d.code,{children:"text-bison"}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"project"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsx)(d.td,{children:"The default GCP project to use when making Vertex API calls"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"request_parallelism"}),(0,n.jsx)(d.td,{children:"Integer"}),(0,n.jsxs)(d.td,{children:["The amount of parallelism allowed for requests issued to VertexAI models (default: ",(0,n.jsx)(d.code,{children:"5"}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"temperature"}),(0,n.jsx)(d.td,{children:"Float"}),(0,n.jsxs)(d.td,{children:["Tunes the degree of randomness in text generations. Should be a non-negative value (default: ",(0,n.jsx)(d.code,{children:"0"}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"top_k"}),(0,n.jsx)(d.td,{children:"Integer"}),(0,n.jsxs)(d.td,{children:["How the model selects tokens for output, the next token is selected from the top ",(0,n.jsx)(d.code,{children:"k"})," tokens (default: ",(0,n.jsx)(d.code,{children:"40"}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"top_p"}),(0,n.jsx)(d.td,{children:"Float"}),(0,n.jsxs)(d.td,{children:["Tokens are selected from the most probable to least until the sum of their probabilities exceeds the top ",(0,n.jsx)(d.code,{children:"p"})," value (default: ",(0,n.jsx)(d.code,{children:"0.95"}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"tuned_model_name"}),(0,n.jsx)(d.td,{children:"String"}),(0,n.jsxs)(d.td,{children:["The name of a tuned model. If provided, ",(0,n.jsx)(d.code,{children:"model_name"})," is ignored"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"verbose"}),(0,n.jsx)(d.td,{children:"Boolean"}),(0,n.jsxs)(d.td,{children:["This parameter controls the level of detail in the output. When set to ",(0,n.jsx)(d.code,{children:"True"}),", it prints internal states of the chain to help debug (default: ",(0,n.jsx)(d.code,{children:"False"}),")"]})]})]})]}),"\n",(0,n.jsx)(d.h4,{id:"outputs-12",children:"Outputs"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Name"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsx)(d.tbody,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"embeddings"}),(0,n.jsx)(d.td,{children:"Embeddings"}),(0,n.jsx)(d.td,{children:"An instance for generating embeddings using VertexAI"})]})})]})]})}function o(e={}){const{wrapper:d}={...(0,t.R)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,d,s)=>{s.d(d,{R:()=>r,x:()=>l});var n=s(96540);const t={},i=n.createContext(t);function r(e){const d=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(i.Provider,{value:d},e.children)}}}]);