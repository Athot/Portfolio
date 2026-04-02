import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-primary-500 text-sm tracking-widest mb-4">
          CONTACT
        </h3>

        <h2 className="text-4xl font-bold mb-6">Let’s Work Together</h2>

        <p className="text-gray-400 max-w-xl mb-12">
          I’m open to internships and full-time opportunities. Feel free to
          reach out if you’d like to collaborate or have a question.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* CONTACT INFO */}
          <div className="space-y-6">
            <div>
              {/* <p className="text-gray-400 text-sm">Email</p> */}
              <p className="text-lg font-semibold flex items-center gap-2">
                <MdEmail />
                <span>thotshangmangkung@gmail.com</span>
              </p>
            </div>

            <div>
              {/* <p className="text-gray-400 text-sm">GitHub</p> */}
              <a
                href="https://github.com/Athot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold hover:text-red-200 flex items-center gap-2"
              >
                <FaGithubSquare />

                <span>GitHub</span>
              </a>
            </div>

            <div>
              {/* <p className="text-gray-400 text-sm">LinkedIn</p> */}
              <a
                href="https://www.linkedin.com/in/thotshang-mangkung"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg flex items-center gap-2 font-semibold hover:text-red-200"
              >
                <BsLinkedin />

                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* CONTACT FORM */}
          {/* <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary-500"
            />

            <button
              type="submit"
              className="bg-primary-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-primary-400 transition"
            >
              Send Message
            </button>
          </form> */}

          {/* location  */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">My Location</h3>

            <div className="w-full h-[300px] rounded-lg overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps?q=Hamilton+Bailey+Hospital,Bangalore&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
