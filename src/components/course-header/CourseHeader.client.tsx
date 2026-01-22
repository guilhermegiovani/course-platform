'use client'

import dynamic from "next/dynamic"
import { CourseHeaderLoading } from "./CourseHeaderLoading"

const CourseHeaderClient = dynamic(
  () =>
    import("./CourseHeader").then(res => res.CourseHeader),
  {
    ssr: false,
    loading: CourseHeaderLoading,
  }
)

export default CourseHeaderClient