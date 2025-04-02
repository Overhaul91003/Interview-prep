import React from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import InterviewCard from '@/components/InterviewCard';
import { getCurrentUser } from '@/lib/actions/auth.action';
import {getInterviewsByUserId, getLatestInterviews} from "@/lib/actions/general.action";

const page = async () => {

  const user = await getCurrentUser() ;
  
  const [userInterviews , latestInterviews] = await Promise.all([
    await getInterviewsByUserId(user?.id!),
    await getLatestInterviews({ userId: user?.id! })
  ])

  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = latestInterviews?.length >0 ;

  return (
    <>
        <section className='card-cta'>
          <div className='flex flex-col gap-6 max-w-lg'>
            <h2>Master interviews with AI-driven practice and insights.</h2>
            <p className='text-lg'>
              Prepare with authentic interview questions and get instant AI insights.
            </p>

            <Button asChild className="btn-primary max-sm:w-full">
              <Link href="/int">Start an interview</Link>
            </Button>

          </div>

          <Image src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden" />
        </section>

        <section className="flex flex-col gap-6 mt-8">
          <h2>Your Interviews</h2>

          <div className='interviews-section flex flex-row flex-wrap gap-6'>
            {
              hasPastInterviews ? (
                userInterviews?.map((interview) => (
                    <InterviewCard {...interview} key={interview.id}/>
                ))) : (
                    <p>You haven&apos;t Taken any interviews yet !</p>
                )
            }   
          </div>
        </section>

        <section className='flex flex-col gap-6 mt-8'>
          <h2>
            Take an Interview 
          </h2>

          <div className='interviews-section flex flex-row flex-wrap gap-6'>
            {
              hasUpcomingInterviews ? (
                latestInterviews?.map((interview) => (
                    <InterviewCard {...interview} key={interview.id}/>
                ))) : (
                    <p>There are no new Interviews available .</p>
                )
            }
          </div>

        </section>
    </>
  )
}

export default page
