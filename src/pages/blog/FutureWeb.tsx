import BlogLayout from "./BlogLayout";

export default function FutureWeb() {
  return (
    <BlogLayout 
      title="The Future of Web Development in 2025"
      date="Dec 20, 2025"
      category="Insights"
      image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
    >
      <p className="font-semibold text-xl text-slate-900">
        AI is no longer just a tool; it's becoming the architect of the modern web.
      </p>
      <p>
        In 2025, we are moving away from traditional server-side rendering towards 
        Edge-Native applications that live closer to the user than ever before.
      </p>
      <h2 className="text-3xl font-bold pt-6 text-slate-900">The Rise of Edge Computing</h2>
      <p>
        By utilizing global networks, CloudNova ensures that your application logic 
        is executed in the data center nearest to your customer.
      </p>
    </BlogLayout>
  );
}