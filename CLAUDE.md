# Midwest Infra Website — Claude Code Project Context

## Always Do First
- Read the SKILL.md file in my project root and follow its instructions every session before writing any frontend code, no exceptions.

## Project Overview

This is the official website for Midwest Infra, a certified SprayROQ™ partner

operating across the State of Michigan. They specialize in trenchless

infrastructure rehabilitation for municipalities, MDOT, county road commissions,

and private industrial clients.



## Tech Stack

- React (component-based, production-quality)

- Tailwind CSS

- Smooth scroll + sticky header navigation

- Google Fonts: Oswald (headings) + Roboto (body)



## Brand

- Primary: #005D9A(deep blue)

- Secondary: #C5964C

- Third: #FFFFFF

- Background accent: #F5F5F5 (light gray sections)

- Company Logo: Midwest Infra logo1.png

- SprayROQ Logo: sprayroq-logo.svg



## Design Direction

- Reference sites: sprayroq.com, https://www.nicxco.com/, pcl.com/us/en, https://www.mccarthy.com/locations/denver

- Industrial, bold, spacious — not cluttered

- Full-width hero (vactruck 1.jpg)

- Mobile responsive at all breakpoints

- Sticky header with nav dropdown for Services



## Page Structure

1. Sticky Header — Logo + Nav (Services dropdown, Our Work, About, Contact Us)

2. Hero — Full-width image/video + headline + CTA button ("Our Services")

3. Services — SprayROQ Coatings, High-Pressure Jetting, Hydrovac

4. Who We Are

5. Project Spotlights — Placeholder cards (see structure below)

6. SprayROQ Partner banner

7. Contact / Get a Quote



## Contact Information

- Phone: (810) 721-1933

- Email: info@mwcc.biz

- Address: 115 E Capac Rd, Imlay City, MI 48444

- Hours: Mon–Thu 8am–4:30pm; Fri by appointment



## Copy Rules — CRITICAL

Never write vague service descriptions. Always be specific and terminology-rich.



BAD: "We provide trenchless rehabilitation services."

GOOD: "We specialize in spray-applied structural lining for large-diameter CMP

culverts, manholes, lift stations, and wet wells for municipalities and DOTs

across Michigan."



Always include:

- Specific service name

- Asset types it applies to

- Problem it solves

- Environment/application context



## Industry Terminology (use throughout)

Structural rehabilitation, CMP deterioration, infiltration mitigation, hydraulic

capacity preservation, load-bearing renewal, trenchless technology, spray-applied

lining, polyurethane structural coating, epoxy lining, cementitious lining,

manhole rehabilitation, inflow and infiltration (I&I) reduction, asset life

extension, non-destructive rehabilitation, no-dig solution, SprayWall®



## Services Detail



### SprayROQ Coatings (certified Michigan partner)

Products: SprayWall® polyurethane lining, two-part epoxy, cementitious mix

Assets: manholes, tanks, tunnels, pipes, clarifiers, digesters, floors, walls,

secondary containment

Key value prop: Rehabilitates aging infrastructure from inside — no digging,

no road disruption, far lower cost than full replacement.



### High-Pressure Sewer Jetting

Clears grease, roots, and heavy blockages in sewer lines



### Sewer Vac & Hydrovac

Non-destructive excavation using pressurized water and vacuum

Use cases: potholing, excavation, debris removal, safe around utilities



## Who We Serve

- Municipalities across Michigan

- Michigan Department of Transportation (MDOT)

- County road commissions

- Private industrial and commercial clients



## Asset Types We Work On

Manholes, lift stations, wet wells, large-diameter CMP culverts, storm sewer

structures, sanitary sewer infrastructure, potable water structures, tunnels,

tanks, clarifiers, digesters, secondary containment floors and walls



## Project Spotlight Card Structure

Each placeholder card must include these 4 sections:

1. Project Context — location, asset type, scope

2. Proposed Solution — product and method used

3. Project Challenges — site conditions, timeline, access, deterioration level

4. Final Outcome — measurable results (linear feet lined, cost savings, timeline)



## File Structure Convention

src/

  components/

    Header.jsx

    Hero.jsx

    Services.jsx

    WhoWeAre.jsx

    Projects.jsx

    Contact.jsx

    Footer.jsx

  assets/

    logo.svg

  App.jsx

  index.css



## Notes for Claude Code

- Use placeholder project data — client will supply real data later

- All copy must follow the AI Visibility guidelines above (specific, terminology-rich)

- Maintain consistency with sprayroq.com language for certified partner credibility
