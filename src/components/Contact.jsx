const Contact = () => {
  return (
    <div id="contact" class="2xl:mt-5 2xl:pt-5 py-[100px] pr-5 pl-1">
      <div id="contact-container" class="my-5 pt-5">
        <div id="contact-grid" class="flex flex-col bg-">
          <div id="sq1" class="bg-test pl-1 pt-5">
            <p class="pt-1 text-xl font-semibold">
              You can contact me by emailing:
              <span class="ml-2 text-[#007ba5]">
                <a
                  class="underline rounded text-cerulean "
                  href="mailto:elsahovey@gmail.com"
                >
                  elsahvy@gmail.com
                </a>
              </span>
            </p>
            <p class="bg-test bg- pl-1 pt-2 opacity-85 pr-5">
              I am always looking for opportunities to further my skills... and
              to work with other like-minded people in tech. Email is the best
              way to get in touch, you can also find me at{" "}
              <span class="underline ">
                <a href="https://www.instagram.com/elsahoveydevdesign/">
                  instagram
                </a>
              </span>{" "}
              and{" "}
              <span class="underline">
                <a href="https://www.linkedin.com/in/elsa-hovey.com">
                  linkedIn
                </a>
                .
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
