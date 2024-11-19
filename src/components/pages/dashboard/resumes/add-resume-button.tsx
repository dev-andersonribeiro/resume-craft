import { ResumeCardButton } from "./resume-card"
import { Plus } from "lucide-react"

export const AddResumeButton = () => {
  return(
    <ResumeCardButton
      title="Criar novo currículo"
      description="Comece do zero"
      icon={<Plus size={50} />}
    />
  )
}