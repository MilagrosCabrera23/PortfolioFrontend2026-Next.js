import { IconType } from "react-icons";
import {z} from "zod";

export interface ContactoHero {
    title: string;
    subtitle: string; 
    description: string;
}

export interface ContactoData {
    hero: ContactoHero;
}

export const ContactoCardSchema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  email: z.email("El correo electrónico no es válido"),
  reason: z.string().min(5, "El motivo debe tener al menos 5 caracteres"),
  message: z.string().min(20, "El mensaje debe tener al menos 20 caracteres"),
});
export type ContactoCardFormData = z.infer<typeof ContactoCardSchema>;