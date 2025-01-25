let resumeData = {
  education: [
    {
      UniversityName: "Nanyang Technological University",
      specialization: "Data Science and Economics",
      MonthOfPassing: "Aug",
      YearOfPassing: "2023",
      Achievements: "Dean's List AY 2023/2024, ASEAN Undergraduate Scholarship",
    },
  ],
  experience: [
    {
      CompanyName: "Machine Learning and Data Analytics @ EEE NTU",
      Role: "Machine Learning Engineer",
      MonthOfStarting: "Sep",
      YearOfStarting: "2024",
      MonthOfLeaving: "Present",
      YearOfLeaving: "",
      Description:
        "Conducted in-depth research on advanced deep learning models for 3D reconstruction from RGB-D images",
    },
    {
      CompanyName: "Deep Learning Week 2024 @ EEE NTU",
      Role: "Academic Committee Member",
      MonthOfStarting: "Sep",
      YearOfStarting: "2024",
      MonthOfLeaving: "Present",
      YearOfLeaving: "",
      Description:
        "Organized workshops and seminars on deep learning, specifically Generative Adversarial Networks (GANs)",
    },
  ],
  work: [
    {
      CompanyName: "LMMs-Lab",
      specialization: "Research Assistant",
      MonthOfStarting: "Sep",
      YearOfStarting: "2023",
      MonthOfLeaving: "Jan",
      YearOfLeaving: "2018",
      Achievements: "Conducted research on multimodal language models.",
    },
  ],
  projects: [
    {
      id: 4,
      title: "Multimodal Benchmarking for Audio-Language Models",
      description: "The Evaluation Suite of Large Multimodal Models",
      technologies: "Python, HuggingFace, Docker, PyTorch",
      imageUrl: "images/lmms-eval.png",
    },
    {
      id: 1,
      title: "Teaching Assistant RAG Chatbot",
      description:
        "A robust chatbot leveraging the Retrieval-Augmented Generation (RAG) method to efficiently answer course-related queries, featuring a FastAPI backend and a ReactJS frontend for seamless interaction.",
      technologies:
        "Python, LangChain, Streamlit, FastAPI, FAISS, OpenAI, ReactJS",
      imageUrl: "images/rag.png",
    },
    {
      id: 2,
      title: "Image Super-Resolution using GAN",
      description:
        "Developed a generative adversarial network (SRGAN) for image super-resolution, incorporating advanced data augmentation techniques for robust training.",
      technologies: "Torch, Torchvision, Pillow, Albumentations",
      imageUrl: "images/srgan.png",
    },
    {
      id: 4,
      title: "Podcast-anything",
      description:
        "An application that create interactive podcast from documents",
      technologies: "OpenAI, Huggingface, Flask, ReactJS",
      imageUrl: "images/podcast.webp",
      url: "https://github.com/pbcong/podcast-anything",
    },
    {
      id: 3,
      title: "Spotify Top Song EDA and Popularity Prediction",
      description:
        "Performed exploratory data analysis and built machine learning models to predict song popularity, achieving a 10% improvement in XGBoost performance through hyperparameter tuning.",
      technologies: "Pandas, Matplotlib, Sklearn, XGBoost",
      imageUrl: "images/EDA.png",
      url: "https://github.com/pbcong/spotify-eda",
    },
  ],
};

export default resumeData;
