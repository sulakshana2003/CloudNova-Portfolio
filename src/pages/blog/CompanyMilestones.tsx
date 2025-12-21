import BlogLayout from "./BlogLayout";

export default function CompanyMilestones() {
  return (
    <BlogLayout 
      title="Our Company Reach New Milestones"
      date="Dec 10, 2025"
      category="News"
      image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
    >
      <p className="text-xl font-medium">We are thrilled to announce that CloudNova has officially scaled to support 500+ global businesses.</p>
      <p>From our humble beginnings in a small office to a global remote team, our mission has remained the same: to make high-performance web infrastructure accessible to everyone.</p>
      <h2 className="text-3xl font-bold mt-8">What's Next?</h2>
      <p>Next year, we are focusing on sustainable green-energy data centers to reduce the carbon footprint of our cloud services.</p>
    </BlogLayout>
  );
}