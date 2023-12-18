"use client";
import {Spinner, ErrorMessage} from '@/app/components'
import { issueSchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading, TextField } from "@radix-ui/themes";
import axios from "axios";
import delay from "delay";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import dynamic from "next/dynamic";
import { Issue } from '@prisma/client';

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

type IssueFormData = z.infer<typeof issueSchema>;

interface Props {
  header: string;
  issue?: Issue;
}

export default async function NewIssuePage({header, issue}: Props) {
  const router = useRouter();

  const {
    register, // register the input field to keep track of its value
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(issueSchema),
  });

  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit: SubmitHandler<IssueFormData> = async (data) => {
    try {
      setSubmitting(true);
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setSubmitting(false);
      console.log(error);
    }
  };

  await delay(500);

  return (
    <form className="max-w-lg space-y-3 mt-5" onSubmit={handleSubmit(onSubmit)}>
      <Heading>{header}</Heading>
      <TextField.Root>
        <TextField.Input {...register("title")} placeholder="Title" defaultValue={issue?.title}/>
      </TextField.Root>
      <ErrorMessage>{errors.title?.message}</ErrorMessage>
      <Controller
        name="description"
        control={control}
        defaultValue={issue?.description}
        render={({ field }) => (
          <SimpleMDE {...field} placeholder="Description"/>
        )}
      />
      <ErrorMessage>{errors.description?.message}</ErrorMessage>

      <Button disabled={isSubmitting} type="submit">
        Submit New Issue {isSubmitting && <Spinner />}
      </Button>
    </form>
  );
}
