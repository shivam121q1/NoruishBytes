import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="w-full min-h-[calc(100vh-300px)] flex items-center justify-center p-8 bg-gray-100">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-2xl border border-gray-300 p-8">
        
        {/* Left Section - Map */}
        <div className="w-full h-64 md:h-[400px]">
          <iframe
            title="Google Maps Location"
            className="w-full h-full rounded-xl border"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094244!2d144.95373531531767!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633038804901!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Right Section - Contact Details */}
        <div className="flex flex-col justify-center text-gray-700 space-y-6">
          <h2 className="text-3xl font-semibold text-amber-800">Contact</h2>
          
          <div className="flex items-center space-x-4">
            <MapPin className="text-amber-800 w-6 h-6" />
            <p className="text-lg">123 Main Street, Melbourne, VIC, Australia</p>
          </div>

          {/* Phone Numbers */}
          <div className="flex items-center space-x-4">
            <Phone className="text-amber-800 w-6 h-6" />
            <div className="flex flex-col space-y-1">
              <a href="tel:+918695970711" className="text-lg hover:text-amber-600 transition">
                +91 86959 70711
              </a>
              <a href="tel:+919650245172" className="text-lg hover:text-amber-600 transition">
                +91 96502 45172
              </a>
            </div>
          </div>

          {/* Emails */}
          <div className="flex items-center space-x-4">
            <Mail className="text-amber-800 w-6 h-6" />
            <div className="flex flex-col space-y-1">
              <a href="mailto:anshul@nourishbyte.com" className="text-lg hover:text-amber-600 transition">
                anshul@nourishbyte.com
              </a>
              <a href="mailto:bhupinder.yadav@nourishbyte.com" className="text-lg hover:text-amber-600 transition">
                bhupinder.yadav@nourishbyte.com
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
