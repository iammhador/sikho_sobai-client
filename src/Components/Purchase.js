import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const Purchase = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePurchase = () => {
    if (email && password) {
      toast.success("Congratulation! You Purchases Sikho Sobai Course");
    }
  };
  return (
    <div className=" mx-auto">
      <div
        className="
				flex
				justify-center
				items-center
				2xl:container 2xl:mx-auto
				lg:py-16
				md:py-12
				py-9
				px-4
				md:px-6
				lg:px-20
				xl:px-44
			"
      >
        <div
          className="
					flex
					w-full
					sm:w-9/12
					lg:w-full
					flex-col
					lg:flex-row
					justify-center
					items-center
					lg:space-x-10
					2xl:space-x-36
					space-y-12
					lg:space-y-0
				"
        >
          <div className="flex w-full flex-col justify-start items-start">
            <div className="">
              <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                Check out
              </p>
            </div>

            <div className="mt-12 flex flex-col justify-start items-start w-full space-y-8">
              <input
                onBlur={(e) => setEmail(e.target.value)}
                className="
								focus:ring-2 focus:ring-gray-500 focus:outline-none
								px-2
								border-b border-gray-200
								leading-4
								text-base
								placeholder-gray-600
								py-4
								w-full
							"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                onBlur={(e) => setPassword(e.target.value)}
                className="
								focus:ring-2 focus:ring-gray-500 focus:outline-none
								px-2
								border-b border-gray-200
								leading-4
								text-base
								placeholder-gray-600
								py-4
								w-full
							"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <button
              onClick={handlePurchase}
              className="
							mt-8
							text-base
							font-medium
							focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
							hover:bg-black
							leading-4
							py-4
							w-full
							md:w-4/12
							lg:w-full
							text-white
							bg-gray-800
						"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>

      <section className="dark:bg-gray-100 dark:text-gray-900">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                <h3 className="text-3xl font-semibold">Courses</h3>
                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
                  Skills you needs modern days
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Requirements{" "}
                  </h3>
                  <p className="mt-3">
                    Students should have Adobe Premiere Pro installed on their
                    computers to follow along. There are A LOT OF PRACTICE
                    EXERCISES throughout this course with downloadable practice
                    clips. We want you to follow along.We teach this course
                    using the Adobe Premiere Pro CC (creative cloud) versions,
                    so it would be best if you're using CC. But you can still
                    learn using CS6, CS5, CS4, or even CS3!
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Description
                  </h3>
                  <p className="mt-3">
                    Start editing your video professionally with Adobe Premiere
                    Pro CC! If you are looking for a video editing application
                    that will allow you to edit videos however you want them,
                    Adobe Premiere Pro is the best answer. Premiere Pro is used
                    by professionals across the world for every type of
                    production from business & marketing videos, music videos to
                    documentaries, feature films. This full course is the best
                    way to jump right in and start editing. Make videos the way
                    you imagine them! Practice editing while you learn. This
                    course includes practice video files so you can follow along
                    and actually learn by doing. By the end of the course,
                    you'll have edited a 1-minute documentary with the supplied
                    footage. I'll be teaching the course using the creative
                    cloud version, but if you have a previous version (Mac or
                    PC), you can still learn to edit like a pro. What makes me
                    qualified to teach you? My name is Phil and I've been
                    editing videos with Adobe Premiere Pro for over a decade.
                    Plus I'm the creator of some of the world's most popular
                    video editing courses - with over 3,000,000 students and
                    thousands of 5-star reviews like these from the Adobe
                    Premiere Pro course: Truly gives you a great hands on
                    training so that you can actually edit video on premiere.
                    Great course. - Jeff Gilbert Awesome course, easy to follow!
                    - Tim Clark Your course is amazing, so I can say that I am
                    learning a lot. Your English is very easy to understand (
                    I'm from Brazil). Thanks for sharing your amazing knowledge.
                    - Jerilson Duarte My Promise to You I'm a full time video
                    editor and online teacher. I'll be here for you every step
                    of the way. If you have any questions about the course
                    content or anything related to this topic, you can always
                    post a question in the course or send me a direct message.
                    What is this Adobe Premiere Pro course all about? In this
                    complete guide to Adobe Premiere Pro video editing course,
                    you'll not only learn all of the editing tools available in
                    Premiere Pro, but also how to edit with the mindset of a
                    professional editor.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    This course will cover everything you need to know to start
                    video editing, including:
                  </h3>
                  <ul className="mt-3">
                    <li>Starting a project</li>
                    <li>Editing your videos</li>
                    <li>Adding video and audio transitions</li>
                    <li>
                      Adding professional and modern titles (even some with
                      motion)
                    </li>
                    <li>
                      Correcting and grading the color of your video to give it
                      a great style
                    </li>
                    <li>
                      Exporting your video for high-quality playback on any
                      device
                    </li>
                    <li>Editing green screen (chroma key) footage</li>
                  </ul>
                  <p className="mt-3">
                    Learn from someone who is currently working in the industry,
                    who knows the most current editing techniques, and who has a
                    Bachelor of Arts in Film and Television Production from one
                    of the country's top film schools.
                    <br />
                    BONUS: As a bonus, you'll receive supplemental video and
                    audio clips to practice with while I teach you with.
                    <br />
                    By the end of this course, your confidence as a video editor
                    will soar You'll have a thorough understanding of how to use
                    Adobe Premiere Pro for fun or as a career opportunity.
                    <br />
                    Go ahead and click the enroll button, and I'll see you in
                    lesson 1!
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Who this course is for:
                  </h3>

                  <ul className="mt-3">
                    <li>
                      You are a video creator (or want to make videos), and are
                      wanting to edit videos with THE BEST video editing
                      application today.
                    </li>
                    <li>
                      You might know how to edit with Final Cut, iMovie, Sony
                      Vegas, Premiere Elements, Windows Movie Maker, Camtasia,
                      Screenflow, etc. But you want to transition to editing
                      with Premiere Pro.
                    </li>
                    <li>
                      You are a complete beginner who has never opened Premiere
                      Pro (or have never learned how to use it properly).
                    </li>
                    <li>
                      You have played around with Premiere Pro, but need some
                      help becoming a more efficient editor.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Purchase;
