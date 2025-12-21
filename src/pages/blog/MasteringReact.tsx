import BlogLayout from "./BlogLayout";

export default function MasteringReact() {
  return (
    <BlogLayout 
      title="Mastering React and Node.js Integration"
      date="Dec 15, 2025"
      category="Tutorial"
      image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
    >
      <p className="text-xl font-medium">Building a bridge between your frontend and backend requires more than just API calls.</p>
      <p>In this guide, we explore how to use TypeScript to share interfaces between your React frontend and Node.js backend, ensuring your data is consistent throughout the entire stack.</p>
      <h2 className="text-3xl font-bold mt-8">Typesafe APIs</h2>
      <p>Using tools like Zod or tRPC, we can catch errors during development rather than at runtime, saving hours of debugging.</p>
    </BlogLayout>
  );
}