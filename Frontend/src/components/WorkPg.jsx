import React from 'react'

const WorkPg = () => {
  const steps = [
    {
      title: "Open YouSee on your phone",
      value: "No download. Just use your browser."
    },
    {
      title: "Grant camera & mic permissions",
      value: "We need them to see and speak."
    },
    {
      title: "Start Listening",
      value: "The app speaks out loud what it sees — objects, people, text, and more."
    },
    {
      title: "Customize Your Experience",
      value: "Adjust voice speed or enable text display."
    }
  ]
  return (
    <div  className='bg-black text-white flex flex-col items-center justify-center p-4'>
      <h1 className='text-2xl md:text-3xl font-bold text-center my-6'>How it Works?</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-[90vw] sm:w-[70vw]">
        {steps.map((feature, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-xl border-2 border-[#00D4FF] p-3 h-32 flex items-center justify-between gap-2 relative"
          >
            <div className="absolute top-[-12%] left-[8%] bg-gradient-to-l from-[#00FFE6] to-[#00D4FF] py-2 px-4 rounded-full">Step {index+1}.</div>
            <p className="sm:text-xl w-[50%]">{feature.title}</p>
            <p className="text-sm text-right">{feature.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkPg