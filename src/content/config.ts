import { z, reference, defineCollection } from "astro:content";

// Site Configuration
const config = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    cta: z.string(),
    url: z.string().url(),
    streetAddress: z.string(),
    city: z.string(),
    state: z.string(),
    postalCode: z.string(),
    telephone: z.string(),
    linkedin: z.string(),
    instagram: z.string(),
    facebook: z.string(),
    address: z.string(),
    email: z.string(),
    tagLine: z.string(),
    logo: z.string(),
    homeHero: z.string(),
    linksDesktop: z.array(
      z.object({
        order: z.number(),
        label: z.string(),
        href: z.string(),
      })
    ),
    linksMobile: z.array(
      z.object({
        order: z.number(),
        label: z.string(),
        href: z.string(),
      })
    ),
    linksSocial: z.array(
      z.object({
        order: z.number(),
        label: z.string(),
        href: z.string(),
      })
    ),
  }),
});

// About config
const about = defineCollection({
  type: "data",
  schema: z.object({
    aboutBody: z.object({
      indexLandingHeader: z.string(),
      indexLandingSubheader: z.string(),
      indexLandingDescription: z.string(),
      indexLandingAboutHeader: z.string(),
      indexLandingAboutSubheader: z.string(),
      indexLandingAboutDescription: z.string(),
      indexLandingTestimonials: z.array(
        z.string()
      ),
      indexAboutDescription: z.array(
        z.string()
      ),
      colorArray: z.array(
        z.string()
      ),
      servicesArray: z.array(
        z.object({
          serviceHeader: z.string(),
          serviceSubheader: z.string(),
          serviceDescription: z.string(),
          serviceParagraph: z.string()
      })
      ),
      images: z.object({
        landing: z.string(),
        landingAbout: z.string(),
        about: z.string(),
        testimonial1: z.string(),
        testimonial2: z.string(),
        testimonial3: z.string(),
        services1: z.string(),
        services2: z.string(),
        services3: z.string()
      })
    })
  })
})

const styles = defineCollection({
  type: "data",
  schema: z.object({
    colors: z.object({
      primary: z.string(),
      secondary: z.string(),
      neutral: z.string()
    })
  })
})

export const collections = {
  config,
  about,
  styles
};
