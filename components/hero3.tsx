'use client';

// import { it } from 'node:test';
import React, { useState } from 'react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

const reviews = [
  {
    name: 'Novels Ghostwriting',
    review: `Got a story burning inside you?
Let’s turn it into a bestseller.
You bring the idea; we bring the magic. Whether it's romance, suspense, fantasy, or drama, our expert storytellers transform your raw concept into a page-turning novel that captivates from the first line to the last. We don’t just write stories. We craft experiences that leave readers obsessed and asking for more.`,
  },
  {
    name: 'Cookbooks Writing',
    review: `Let your recipes rise off the page and onto their plates.
Your signature dishes deserve more than scribbled notes—they deserve a spotlight. Our cookbook writers blend your culinary know-how with mouth-watering descriptions, pro kitchen tips, and polished design to create a cookbook readers can’t put down (and won’t stop cooking from). It’s your flavor published to perfection.`,
  },
  {
    name: 'eBook Writing',
    review: `Turn your knowledge into influence—one scroll at a time.
Looking to build authority, grow your brand, or share your expertise? Our eBook writing service helps you craft powerful, insightful content that grabs attention and delivers value. From how-tos to thought leadership, we create engaging digital books that inform, inspire, and get shared. You’ve got wisdom—let’s publish it.`,
  },
  {
    name: 'Business Ghostwriting',
    review: `Your ideas. Our words. One unforgettable brand voice.
Want to stand out in your industry? A high-impact book or whitepaper can open doors, build trust, and position you as a leader. Our business ghostwriters turn complex ideas into powerful, polished content that gets results. From brand books to expert guides, we help you speak directly to your audience with authority and style.`,
  },
  {
    name: 'Beauty Ghostwriting',
    review: `Make your beauty brand irresistible with words that sell and stories that shine.
From trending product descriptions to glowing skincare blogs and viral-worthy captions—our beauty ghostwriters speak your brand’s language. We craft content that captivates your audience, aligns with your aesthetic, and drives engagement across every platform. Let your brand glow from the inside out through powerful words.`,
  },
  {
    name: 'Screenplay Ghostwriting',
    review: `Got a vision? We’ll write the script that brings it to life.
Whether it's a short film, web series, or blockbuster dream—we take your concept and craft it into a cinematic masterpiece. Our screenplay ghostwriters don’t just write scripts—they create stories with emotion, dialogue, and drama that demand to be seen. Lights, camera… let’s write your next big hit.`,
  },
  {
    name: 'Article Writing',
    review: `Articles that inform, inspire, and dominate search results.
Want content that positions you as an expert and ranks high on Google? Our article writers deliver data-driven, engaging content tailored to your audience and niche. We handle everything from topic research to SEO optimization so you get content that converts readers into loyal fans.`,
  },
  {
    name: 'Blog Ghostwriting',
    review: `Blogs that bring traffic, build trust, and boost your brand.
Consistent, high-quality blogs are the secret weapon of top-performing websites—and we’ve got you covered. Our blog ghostwriters blend storytelling with strategy to create SEO-rich, reader-friendly posts that increase visibility, authority, and leads. Want your blog to work harder for your business? Let’s get writing.`,
  },
  {
    name: 'Celebrity Writing',
    review: `Let the world hear your story—your way.
You’ve lived it. We’ll write it. Whether it’s your rise to fame, your challenges, or personal moments worth sharing, we help celebrities and public figures turn their life stories into powerful, inspiring books. Your voice, your journey—beautifully written and ready for the spotlight.`,
  },
  {
    name: 'Legal Ghostwriting',
    review: `Make the law simple, sharp, and clear.
Legal writing doesn't have to be boring. We create smart, easy-to-read legal content that reflects your authority—whether it's a guide, article, or book. Perfect for lawyers, firms, or legal educators who want to share their knowledge without sounding too technical.`,
  },
  {
    name: 'Medical Ghostwriting',
    review: `Share your medical expertise with the world.
Doctors, researchers, and healthcare experts—your knowledge can change lives. Let us help you turn it into clear, trusted medical content that educates, informs, and supports both professionals and the public. We write it right so your readers understand every word.`,
  },
  {
    name: 'Health & Fitness Ghostwriting',
    review: `Inspire better living through powerful words.
Your passion for wellness can motivate others—if it's told the right way. We help health coaches, trainers, and fitness experts share their tips, routines, and healthy living advice through fun, practical, and easy-to-follow writing. Let’s help your readers live their best life.`,
  },
  {
    name: 'Children’s Book Writing',
    review: `Turn your child’s dreams into delightful stories!
Our children's book writing service brings young imaginations to life with fun, heartwarming tales designed to spark curiosity and a lifelong love of reading. Whether it’s magical adventures or life lessons wrapped in whimsy, we craft stories kids won’t forget.`,
  },
  {
    name: 'Autobiographies',
    review: `Your story deserves to be told authentically.
Let us help you turn your life’s journey into a powerful autobiography. From pivotal moments to personal triumphs, we shape your memories into a compelling narrative that leaves a lasting legacy and connects with readers on a deeply human level.`,
  },
  {
    name: 'Self-Help Ghostwriting',
    review: `Transform your personal growth journey into a powerful book that inspires others.
Whether you’ve overcome challenges, mastered life strategies, or developed a unique mindset, I’ll help you turn your story into a compelling, publish-ready self-help guide. With expert ghostwriting tailored to your voice and vision, your message won’t just be written—it will move people.`,
  },
  {
    name: 'Fantasy Ghostwriting',
    review: `Let the magic begin!
We specialize in bringing epic worlds and unforgettable characters to life. From dragons to dark kingdoms, we turn your wildest fantasies into captivating stories that grip the imagination and keep readers hooked from page one to “The End.”`,
  },
  {
    name: 'Fiction Ghostwriting',
    review: `Bring your imagination to life with powerful storytelling!
Whether it's a romantic saga, a chilling thriller, or an epic fantasy, we’ll help turn your ideas into gripping fiction that readers won’t forget. You give us the plot, characters, or just a rough idea—and we’ll craft a page-turner with rich emotions, twists, and depth. Let’s create your next bestselling novel without the writing stress.`,
  },
  {
    name: 'Non-Fiction Ghostwriting',
    review: `Share your story. Teach your lessons. Inspire the world.
From personal memoirs to self-help, business strategies to real-life experiences—we help you express your message with clarity and confidence. Whether you're an expert, entrepreneur, or someone with a story that deserves to be told, I’ll shape your vision into a powerful non-fiction book that connects with your readers and builds your authority.`,
  },
];


const Hero3 = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 4) % reviews.length);
  };

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex - 4 < 0 ? reviews.length - (reviews.length % 4 || 4) : prevIndex - 4
    );
  };

  const visibleReviews = reviews.slice(index, index + 4);

  return (
    <div className="bg-[#f9f9f9] py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-center mb-12">
          <h2 className="text-[#052540] text-2xl lg:text-4xl font-bold mb-8 font-serif">
            Work with Top Book Writing Experts:<br /> Where Every Genre Finds Its Voice
          </h2>
          <p className="text-[#052540] text-md lg:text-lg">
            No matter your taste either self-help, suspense, or epic fantasy,<br />
            we have the perfect book waiting to be written.
          </p>
        </div>

        <div className="flex justify-between items-center mb-6 px-6">
          <button onClick={prev}>
            <MdNavigateBefore size={32} className="text-[#052540]" />
          </button>
          <button onClick={next}>
            <MdNavigateNext size={32} className="text-[#052540]" />
          </button>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-6">
          {visibleReviews.map((review, i) => (
            <div
              key={i}
              className="bg-blue-100 hover:bg-blue-200 transition duration-300 rounded-lg p-6 shadow-md text-left"
            >
              <span className="font-bold text-[#052540] capitalize text-lg block mb-2">
                {review.name}
              </span>
              <p className="text-gray-700 text-sm leading-snug">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero3;
