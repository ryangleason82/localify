import { getEntry } from "astro:content";

export const getSchemaOrg = async (type: string, Astro: any) => {
  const siteConfig = await getEntry("config", "site");
  const canonicalURL = new URL(Astro.url.pathname, Astro.site);

  switch (type) {
    case "LocalBusiness":
      return {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        description: "Making Your Website better, faster, and cheaper",
        url: siteConfig.data.url,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.data.city,
          addressRegion: siteConfig.data.state,
          streetAddress: siteConfig.data.streetAddress,
          postalCode: siteConfig.data.postalCode,
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.data.telephone,
            contactType: "customer service",
          },
        ],
        name: siteConfig.data.name,
        image: "",
        telephone: siteConfig.data.telephone,
        email: siteConfig.data.email,
      };
    case "Article":
      const { entry } = Astro.props;
      const frontmatter = entry?.data ? entry.data : null;
      const author = frontmatter.authorRef
        ? await getEntry("authors", frontmatter.authorRef.id)
        : null;

      const image = frontmatter.imageRef
        ? await getEntry("images", frontmatter.imageRef.id)
        : null;

      return {
        "@context": "http://schema.org",
        "@type": "Article",
        headline: frontmatter.title,
        name: frontmatter.title,
        author: author
          ? {
              "@type": "Person",
              name: author.data.name,
            }
          : null,
        datePublished: frontmatter.datePublished,
        image: image ? image.data.src : null,
        description: frontmatter.description,
        articleBody: entry.body,
        url: canonicalURL,
        publisher: {
          "@type": "Organization",
          name: siteConfig.data.name,
        },
      };
    case "Restaurant":
      return {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        url: "http://www.thisisarestaurant.com",
        name: "The Restaurant",
        image: "http://www.example.com/image-of-some-restaurant.jpg",
        description:
          "This is an example restaurant that serves American cuisine.",
        servesCuisine: ["American cuisine"],
        hasMenu: {
          "@type": "Menu",
          name: "Dine-In Menu",
          description: "Menu for in-restaurant dining only.",
          hasMenuSection: [
            {
              "@type": "MenuSection",
              name: "Dinner",
              description: "Dinner dishes",
              image: "https://thisisarestaurant.com/dinner_dishes.jpg",
              offers: {
                "@type": "Offer",
                availabilityEnds: "2017-03-02T08:22:00",
                availabilityStarts: "2017-03-02T08:22:00",
              },
              hasMenuSection: [
                {
                  "@type": "MenuSection",
                  name: "Starters",
                  description: "Appetizers and such",
                  image: "https://thisisarestaurant.com/starter_dishes.jpg",
                  offers: {
                    "@type": "Offer",
                    availabilityEnds: "2017-03-02T08:22:00",
                    availabilityStarts: "2017-03-02T08:22:00",
                  },
                  hasMenuItem: {
                    "@type": "MenuItem",
                    name: "Potato Skins",
                    description: "Small serving of stuffed potato skins.",
                    offers: {
                      "@type": "Offer",
                      price: "7.49",
                      priceCurrency: "USD",
                    },
                    suitableForDiet: "https://schema.org/GlutenFreeDiet",
                  },
                },
                {
                  "@type": "MenuSection",
                  name: "Soups & Salads",
                  description: "Salads and a few choices of soup",
                  image:
                    "https://thisisarestaurant.com/soup_and_salad_dishes.jpg",
                  offers: {
                    "@type": "Offer",
                    availabilityEnds: "2017-03-02T08:22:00",
                    availabilityStarts: "2017-03-02T08:22:00",
                  },
                  hasMenuItem: {
                    "@type": "MenuItem",
                    name: "Pea Soup",
                    description:
                      "Creamy pea soup topped with melted cheese and sourdough croutons.",
                    offers: {
                      "@type": "Offer",
                      price: "3.49",
                      priceCurrency: "USD",
                    },
                  },
                },
              ],
            },
          ],
        },
      };
    case "Person":
      return {
        "@context": "https://schema.org",
        "@type": "Person",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Seattle",
          addressRegion: "WA",
          postalCode: "98052",
          streetAddress: "20341 Whitworth Institute 405 N. Whitworth",
        },
        colleague: [
          "http://www.xyz.edu/students/alicejones.html",
          "http://www.xyz.edu/students/bobsmith.html",
        ],
        email: "mailto:jane-doe@xyz.edu",
        image: "janedoe.jpg",
        jobTitle: "Professor",
        name: "Jane Doe",
        telephone: "(425) 123-4567",
        url: "http://www.janedoe.com",
      };
    case "Book":
      return {
        "@context": "https://schema.org",
        "@type": "Book",
        name: "Holt Physical Science",
        isbn: "9780030426599",
        author: "/author/jd_salinger.html",
        bookFormat: "https://schema.org/Paperback",
        datePublished: "1991-05-01",
        image: "catcher-in-the-rye-book-cover.jpg",
        copyrightHolder: {
          "@type": "Organization",
          name: "Holt, Rinehart and Winston",
        },
        copyrightYear: "2007",
        description: "NIMAC-sourced textbook",
        genre: "Educational Materials",
        inLanguage: "en-US",
        isFamilyFriendly: "true",
        numberOfPages: "598",
        publisher: {
          "@type": "Organization",
          name: "Holt, Rinehart and Winston",
        },
      };
    case "SocialMediaPosting":
      return {
        "@context": "https://schema.org",
        "@type": "SocialMediaPosting",
        "@id": "https://www.pinterest.com/pin/201887995769400347/",
        datePublished: "2014-03-04",
        author: {
          "@type": "Person",
          name: "Ryan Sammy",
          url: "https://www.pinterest.com/ryansammy/",
        },
        headline: "Leaked new BMW 2 series (m235i)",
        sharedContent: {
          "@type": "WebPage",
          headline: "Leaked new BMW 2 series (m235i) ahead of oct 25 reveal",
          url: "http://www.reddit.com/r/BMW/comments/1oyh6j/leaked_new_bmw_2_series_m235i_ahead_of_oct_25/",
          author: {
            "@type": "Person",
            name: "threal135i",
          },
        },
      };
    default:
      return {};
  }
};
