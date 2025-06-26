import React from 'react'
import Image from 'next/image';

export default function Reviews() {
  const users = [
    {
      name: "Mitra",
      text: "Incredible content. This book helped me stay focused and stay consistent.",
      avatar: "/images/user1.jpg",
    },
    {
      name: "Arman",
      text: "Step-by-step changes! I finally built a routine that works.",
      avatar: "/images/user2.jpg",
    },
    {
      name: "Sara",
      text: "The journaling method is gold. I spot all mistakes before they repeat.",
      avatar: "/images/user3.jpg",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden min-h-[calc(100vh / 2)]">
      <div className="absolute w-[1000px] h-[1000px] rounded-full blur-3xl opacity-30 -z-10 bottom-[-50px] left-[50px]"
        style={{
          background: "radial-gradient(circle, #6abcff 0%, #000 80%, #f59e42 100%)"
        }}
      />
      <h2 className="text-3xl font-semibold mb-10">Reviews</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {users.map((user, idx) => (
          <div
            key={user.name}
            className="relative rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Outer glow border animated light */}
            <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-tr from-orange-500/20 via-purple-600/10 to-blue-500/20 opacity-40 animate-pulse pointer-events-none" />

            {/* Inner radial light */}
            <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent opacity-25 pointer-events-none rounded-2xl" />

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center mb-4 gap-3">
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="font-medium text-white">{user.name}</div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {user.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
