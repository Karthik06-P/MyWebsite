 import React from "react";
 

const pdfLink = "./Karthik_Portfolio.pdf"; // update this path when deploying
const resume="./KARTHIK P.pdf";
const karthikimage="./karthik image.png"
 
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Karthik</h1>
          <nav className="space-x-4 text-sm">
              <a href={resume} className="ml-4 inline-block rounded-md border border-indigo-600 px-3 py-1 text-indigo-600 text-sm" download>
              Download Resume
            </a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a href={pdfLink} className="ml-4 inline-block rounded-md border border-indigo-600 px-3 py-1 text-indigo-600 text-sm" download>
              Download Portfolio
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold leading-tight">Karthik — Full-Stack Web Developer</h2>
            <p className="mt-4 text-gray-700">I build responsive, user-friendly websites and web apps. I focus on clean code, performance and great UX. Experienced with HTML, CSS, Tailwind, JavaScript, React and backend with PHP/Laravel.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-md bg-indigo-600 px-4 py-2 text-white">View Projects</a>
              <a href="#contact" className="rounded-md border border-gray-300 px-4 py-2">Contact Me</a>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <div>Location: Chennai, India</div>
              <div className="mt-1">Email: <a href="mailto:palanivelkarthi06@gmail.com" className="text-indigo-600">palanivelkarthi06@gmail.com</a></div>
              <div className="mt-1">Phone: <a href="tel:+917358765039" className="text-indigo-600">+91 73587 65039</a></div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="h-48 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <center>
<img className="w-[30%]" src={karthikimage} alt="" />
</center>
                <div className="mt-2 font-medium text-lg">Clean code · Fast delivery · Responsive</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <a href="https://insuredot.co.in" target="_blank" rel="noreferrer" className="block p-3 border rounded hover:shadow">
                <div className="text-sm font-semibold">InsuranceDot</div>
                <div className="text-xs text-gray-500 mt-1">Live project — HTML/CSS/PHP</div>
              </a>
              <a href="https://gurugroup.co.in" target="_blank" rel="noreferrer" className="block p-3 border rounded hover:shadow">
                <div className="text-sm font-semibold">Guru Group</div>
                <div className="text-xs text-gray-500 mt-1">Corporate website</div>
              </a>
              <a href="https://greenhubnursery.com" target="_blank" rel="noreferrer" className="block p-3 border rounded hover:shadow">
                <div className="text-sm font-semibold">Green Hub Nursery</div>
                <div className="text-xs text-gray-500 mt-1">Product display site</div>
              </a>
              <a href="https://abhivruddhikisanfoundation.org" target="_blank" rel="noreferrer" className="block p-3 border rounded hover:shadow">
                <div className="text-sm font-semibold">Abhivruddhi Kisan Foundation</div>
                <div className="text-xs text-gray-500 mt-1">NGO website (4E initiative)</div>
              </a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-12">
          <h3 className="text-2xl font-semibold">Skills</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded shadow-sm">
              <h4 className="font-medium">Frontend</h4>
              <p className="mt-2 text-sm text-gray-600">HTML, CSS, Tailwind CSS, JavaScript, React.js</p>
            </div>
            <div className="p-4 bg-white rounded shadow-sm">
              <h4 className="font-medium">Backend & DB</h4>
              <p className="mt-2 text-sm text-gray-600">PHP, Laravel, MySQL</p>
            </div>
            <div className="p-4 bg-white rounded shadow-sm">
              <h4 className="font-medium">Tools & Others</h4>
              <p className="mt-2 text-sm text-gray-600">API Integration, UI/UX Basics, VS Code, Git, Postman</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-12">
          <h3 className="text-2xl font-semibold">Projects</h3>
          <div className="mt-6 space-y-4">
            <article className="p-4 bg-white rounded shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">InsuranceDot (Live Project)</h4>
                  <p className="text-sm text-gray-600 mt-1">A complete insurance website designed and developed independently. Technologies: HTML, CSS, PHP, MySQL.</p>
                </div>
                <a href="https://insuredot.co.in" target="_blank" rel="noreferrer" className="text-indigo-600 text-sm">Visit</a>
              </div>
            </article>

            <article className="p-4 bg-white rounded shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Guru Group – Corporate Website</h4>
                  <p className="text-sm text-gray-600 mt-1">Responsive corporate website with multiple service pages and contact integration.</p>
                </div>
                <a href="https://gurugroup.co.in" target="_blank" rel="noreferrer" className="text-indigo-600 text-sm">Visit</a>
              </div>
            </article>

            <article className="p-4 bg-white rounded shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Green Hub Nursery – Product Display Website</h4>
                  <p className="text-sm text-gray-600 mt-1">E-commerce style product showcase with categories and image gallery.</p>
                </div>
                <a href="https://greenhubnursery.com" target="_blank" rel="noreferrer" className="text-indigo-600 text-sm">Visit</a>
              </div>
            </article>

            <article className="p-4 bg-white rounded shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Abhivruddhi Kisan Foundation – NGO Website</h4>
                  <p className="text-sm text-gray-600 mt-1">Website developed to support the 4E initiative: Environment, Education, Empowerment, Economy.</p>
                </div>
                <a href="https://abhivruddhikisanfoundation.org" target="_blank" rel="noreferrer" className="text-indigo-600 text-sm">Visit</a>
              </div>
            </article>
          </div>
        </section>

        {/* Strengths - ensure this can start on a new page when printing */}
        <section className="mt-12 print:break-before-page">
          <h3 className="text-2xl font-semibold">Strengths</h3>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            <li>Clean and maintainable code</li>
            <li>Ability to handle end-to-end website development</li>
            <li>Quick learner and adaptable</li>
            <li>Strong problem-solving skills</li>
            <li>Good communication and teamwork</li>
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <div className="mt-4 bg-white p-6 rounded shadow-sm">
            <p className="text-sm">Email: <a className="text-indigo-600" href="mailto:palanivelkarthi06@gmail.com">palanivelkarthi06@gmail.com</a></p>
            <p className="text-sm mt-1">Phone: <a className="text-indigo-600" href="tel:+917358765039">+91 73587 65039</a></p>
            <p className="text-sm mt-1">LinkedIn: <a className="text-indigo-600" href="https://www.linkedin.com/in/karthi06/" target="_blank" rel="noreferrer">linkedin.com/in/karthi06</a></p>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Karthik. Built with care.
        </footer>
      </main>
    </div>
  );
}
