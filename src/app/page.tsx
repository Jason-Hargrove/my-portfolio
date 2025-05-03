export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="w-full px-6 py-4 flex justify-between items-center bg-black border-b border-gray-800 sticky top-0 z-50">
        <h1 className="text-xl font-bold">Jason Hargrove</h1>
        <ul className="flex space-x-6 text-sm text-gray-300">
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#skills" className="hover:text-white">Skills</a></li>
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
      </nav>

      <section className="flex items-center justify-center text-center px-4 py-24">
        <div>
          <h2 className="text-4xl md:text-6xl font-semibold mb-4">
            Jason Hargrove
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            Full-Stack Developer | QA Tester | Creative Techonologist
          </p>
          <p className="mt-6 text-md text-gray-500 mx-w-xl mx-auto">
            Building sleek, modern web experiences with React, Next.js, and a QA
            Fuck mindset.
          </p>
        </div>
      </section>
    </main>
  );
}
