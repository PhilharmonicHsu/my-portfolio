import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from 'sonner'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const sectionRef = useRef(null);
  const suptitle1Ref = useRef(null);
  const suptitle2Ref = useRef(null);
  const suptitle3Ref = useRef(null);
  const iconsRef = useRef(null);
  const submitRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "+=700",
        toggleActions: "play reverse play reverse",
      },
    })

    tl.fromTo(
      suptitle1Ref.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
    )

    tl.fromTo(
      suptitle2Ref.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
      0.2
    )

    tl.fromTo(
      suptitle3Ref.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
      0.4
    )

    tl.fromTo(
      iconsRef.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      0.4
    )

    tl.fromTo(
      '.name',
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
      0.6
    )

    tl.fromTo(
      '.email',
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
      0.2
    )

    tl.fromTo(
      '.message',
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
      0.2
    )

    tl.fromTo(
      submitRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
      0.2
    )
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);    

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      ).then(
        (response) => {
          toast.success('Message sent successfully!')
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast.fail('Failed to send message.')
        }
      ).finally(() => {
        setIsSending(false)
      });
  };

  return (
    <section ref={sectionRef} className="pt-20 pb-4 sm:px-10 px-0 max-w-4xl mx-auto text-center">
      <Toaster position="top-center" richColors />
      <h2 ref={suptitle1Ref} className="text-4xl font-bold text-white mb-6">Would you like to work Together?</h2>
      <p ref={suptitle2Ref} className="text-gray-300">Email: <strong>xuyuwei19940909@gmail.com</strong></p>
      <p ref={suptitle3Ref} className="text-gray-300">Call: <strong>+1 236-867-7624</strong></p>
      <div ref={iconsRef} className="flex justify-center gap-6 text-3xl mt-4">
        <a href="https://github.com/PhilharmonicHsu" target="_blank" className="text-gray-300 hover:text-pink-400">
          <svg width="50" height="50" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33 0C28.6664 0 24.3752 0.874762 20.3714 2.57434C16.3677 4.27392 12.7298 6.76503 9.66548 9.90544C3.47678 16.2478 0 24.8499 0 33.8193C0 48.7674 9.471 61.4496 22.572 65.9476C24.222 66.2182 24.75 65.1698 24.75 64.2567V58.5412C15.609 60.5703 13.662 54.0094 13.662 54.0094C12.144 50.0864 9.999 49.038 9.999 49.038C6.996 46.9412 10.23 47.0088 10.23 47.0088C13.53 47.2455 15.279 50.4922 15.279 50.4922C18.15 55.6327 23.001 54.1109 24.882 53.2992C25.179 51.1009 26.037 49.6129 26.961 48.7674C19.635 47.9219 11.946 45.0135 11.946 32.1283C11.946 28.3744 13.2 25.3645 15.345 22.9633C15.015 22.1178 13.86 18.6006 15.675 14.035C15.675 14.035 18.447 13.1219 24.75 17.4846C27.357 16.7405 30.195 16.3685 33 16.3685C35.805 16.3685 38.643 16.7405 41.25 17.4846C47.553 13.1219 50.325 14.035 50.325 14.035C52.14 18.6006 50.985 22.1178 50.655 22.9633C52.8 25.3645 54.054 28.3744 54.054 32.1283C54.054 45.0473 46.332 47.8881 38.973 48.7336C40.161 49.782 41.25 51.845 41.25 54.9902V64.2567C41.25 65.1698 41.778 66.252 43.461 65.9476C56.562 61.4158 66 48.7674 66 33.8193C66 29.3781 65.1464 24.9804 63.488 20.8772C61.8296 16.7741 59.3989 13.0459 56.3345 9.90544C53.2702 6.76503 49.6323 4.27392 45.6286 2.57434C41.6248 0.874762 37.3336 0 33 0Z" fill="black"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/yuwei-hsu-280432327/" target="_blank" className="text-gray-300 hover:text-pink-400">
        <svg width="50" height="50" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60.7188 1.57031H6.28125C5.0461 1.55774 3.85641 2.03567 2.97322 2.89923C2.09004 3.76279 1.5855 4.94144 1.57031 6.17656V60.8339C1.58824 62.0672 2.09399 63.2432 2.97688 64.1045C3.85976 64.9658 5.04789 65.4423 6.28125 65.4297H60.7188C61.954 65.4395 63.1429 64.9599 64.0256 64.0958C64.9083 63.2317 65.4131 62.0534 65.4297 60.8182V6.16086C65.4077 4.92936 64.9005 3.75633 64.0183 2.89673C63.1362 2.03714 61.9504 1.56046 60.7188 1.57031Z" fill="#0076B2"/>
          <path d="M11.0236 25.5071H20.503V56.0078H11.0236V25.5071ZM15.7659 10.3274C16.8532 10.3274 17.916 10.6499 18.8199 11.254C19.7239 11.8582 20.4283 12.7168 20.8442 13.7214C21.26 14.726 21.3685 15.8314 21.156 16.8976C20.9435 17.9639 20.4196 18.9432 19.6504 19.7117C18.8812 20.4801 17.9014 21.0031 16.835 21.2146C15.7685 21.4261 14.6632 21.3165 13.659 20.8997C12.6549 20.4829 11.7968 19.7777 11.1936 18.8731C10.5903 17.9686 10.2688 16.9055 10.2698 15.8183C10.2712 14.3615 10.8509 12.9649 11.8815 11.9353C12.912 10.9057 14.3092 10.3274 15.7659 10.3274ZM26.4493 25.5071H35.5362V29.6946H35.6618C36.9285 27.2972 40.0168 24.769 44.6283 24.769C54.2281 24.7481 56.0078 31.066 56.0078 39.2578V56.0078H46.5284V41.1683C46.5284 37.6351 46.4656 33.0865 41.6028 33.0865C36.7401 33.0865 35.913 36.939 35.913 40.938V56.0078H26.4493V25.5071Z" fill="white"/>
        </svg>
        </a>
      </div>
      <form onSubmit={handleSubmit} className="mt-0 p-6 text-left">
        <label className="name block text-white font-semibold">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="name w-full text-black px-3 py-2 mt-1 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <label className="email block text-white font-semibold mt-4">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
          className="email w-full text-black px-3 py-2 mt-1 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <label className="message block text-white font-semibold mt-4">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="What's on your mind?"
          className="message w-full px-3 py-2 mt-1 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="4"
          required
        />

        <button
          ref={submitRef}
          type="submit"
          className="mt-4 px-6 py-3 bg-blue-500 cursor-pointer rounded-lg hover:bg-blue-600 transition w-full disabled:bg-gray-600 disabled:cursor-progress"
          disabled={isSending}
        >
          {isSending ? 'Sending...' : 'Send Message' } 
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
