const Porto = () => {
  return (
    <div>

      {/* HEADER */}
      <header className="w-full h-20 bg-[#0f2142] text-amber-50">
        <nav className="flex items-center justify-between px-10 h-full">
          <img src="/img/logo.png" width={100} alt="logo" />

         
        </nav>
      </header>

      {/* HERO */}
      <main className="relative">
        <img
          src="/img/img12.jpg"
          alt="hero"
          className="w-full h-[500px] object-cover"
        />

        <div className="absolute bottom-10 right-10 bg-white p-8 rounded shadow-xl max-w-md">
          <h2 className="text-2xl font-bold">
            Suleiman – Full Stack Developer Portfolio
          </h2>

          <hr className="border-yellow-400 my-3 w-16" />

          <p className="text-gray-600">
            Modern, responsive web applications built with React,
            Tailwind CSS and clean architecture.
          </p>
        </div>
      </main>

      {/* ABOUT */}
      <section className="grid md:grid-cols-2 gap-10 p-10 items-center">
        <img
          src="/img/img6.jpg"
          className="rounded-lg w-full h-[400px] object-cover"
        />

        <div>
          <h1 className="text-3xl font-bold">ABOUT SULEIMAN</h1>
          <hr className="w-16 border-blue-500 my-3" />

          <p className="text-gray-600 leading-relaxed">
            Hi, I'm Suleiman Mohamed, a Full Stack Web Developer who enjoys
            building modern and responsive web applications using
            React, Tailwind CSS, Node.js and MongoDB.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-100 py-16 px-10">
        <h1 className="text-3xl font-bold text-center">MY SERVICES</h1>
        <hr className="w-20 border-blue-500 mx-auto my-4" />

        <div className="grid md:grid-cols-3 gap-10 mt-10">
          <div className="bg-white p-2 rounded-lg shadow hover:shadow-lg">
            <img src="img/img8.jpg" className="w-100 h-80"/>
            <h2 className="text-xl font-bold mb-2">Web Development</h2>
            <p className="text-gray-600">
              I build modern responsive websites using React,
              Tailwind CSS and modern technologies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <img src="img/img9.jpg" className="w-90 h-80"/>
            <h2 className="text-xl font-bold mb-2">UI / UX Design</h2>
            <p className="text-gray-600">
              Clean and modern user interface design that improves UX.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
            <img src="img/img5.jpg" className="w-90 h-80"/>
            <h2 className="text-xl font-bold mb-2">Backend Development</h2>
            <p className="text-gray-600">
              API development using Node.js, Express and MongoDB.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 px-10">
        <h1 className="text-3xl font-bold text-center">CONTACT ME</h1>
        <hr className="w-20 border-blue-500 mx-auto my-4" />

        <div className="grid md:grid-cols-2 gap-10 mt-10">

          <div>
            <h2 className="text-xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-2">📍 Mogadishu, Somalia</p>
            <p className="text-gray-600 mb-2">📞 +252 61 7777000</p>
            <p className="text-gray-600 mb-2">✉️ suleimanmohomed4@gmail.com</p>
          </div>

          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border p-3 rounded"/>
            <input type="email" placeholder="Email Address" className="w-full border p-3 rounded"/>
            <textarea placeholder="Your Message" className="w-full border p-3 rounded h-32"/>
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            onClick={()=>{
              alert("YOUR MESSAGE SUCCESSFUL SEND TO OWNER")
            }}>
              Send Message
            </button>
          </form>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f2142] text-white py-10 px-10">
        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-xl font-bold mb-3">Suleiman</h2>
            <p className="text-gray-300">
              Full Stack Web Developer building modern web applications.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-yellow-400 cursor-pointer">Home</li>
              <li className="hover:text-yellow-400 cursor-pointer">About</li>
              <li className="hover:text-yellow-400 cursor-pointer">Services</li>
              <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Follow Me</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400">Facebook</a>
              <a href="#" className="hover:text-yellow-400">GitHub</a>
              <a href="#" className="hover:text-yellow-400">LinkedIn</a>
            </div>
          </div>

        </div>

        <div className="text-center mt-10 border-t border-gray-500 pt-5 text-gray-400">
          © 2026 Suleiman Mohamed. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
};

export default Porto;