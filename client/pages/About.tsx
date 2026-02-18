import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  return (
    <div className={`container py-24 transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">About FinVault</h1>
          <p className="text-lg text-muted-foreground mb-6">We’re a team of finance and ML engineers building tools to help people make better financial decisions.</p>
          <p className="mb-6">Founded in 2020, FinVault combines modern UX with enterprise-grade security to deliver a trustworthy finance experience.</p>
          <Button asChild>
            <Link to="/#contact">Contact Us</Link>
          </Button>
        </div>

        <div className="space-y-6">
          <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" alt="team" className="w-full rounded-2xl shadow-lg object-cover max-h-80" />
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.pexels.com/photos/3183173/pexels-photo-3183173.jpeg" alt="office" className="w-full rounded-lg object-cover h-36" />
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" alt="meeting" className="w-full rounded-lg object-cover h-36" />
          </div>
        </div>
      </div>
    </div>
  );
}
