"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import AboutFeature from '@/components/sections/about/AboutFeature';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Target, Users, TrendingUp, Award, Home, Building, Briefcase, BarChart3, DollarSign, Quote, Phone, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="large"
      background="dotGrid"
      cardStyle="solid-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Results", id: "metrics" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="SalesForce Pro"
          button={{
            text: "Get Quote",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Transform Your Sales Results with Professional Door-to-Door Services"
          description="We help businesses achieve remarkable growth through proven door-to-door sales strategies, expert training, and personalized customer engagement solutions."
          tag="Sales Excellence"
          tagIcon={Target}
          buttons={[
            { text: "Start Growing", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/ge19d946bac8bf858d5a3263409153c75328522773665d5abc0e42111915295ab8b862684665b0f64b0b45533e63d3f68b08188bc9c619d2f179548279d1c54e4_1280.jpg",
              imageAlt: "Professional sales meeting"
            },
            {
              imageSrc: "https://pixabay.com/get/g0bcbdcf8fea0f7c2787ef5f30df789a8bcf69b0f3b55ab3a99f31d85a2e03362d5fcacb9ee234d11f783276555fc5f7077a07781d35c99b60e9df6df4847c96c_1280.jpg",
              imageAlt: "Sales training session"
            },
            {
              imageSrc: "https://pixabay.com/get/g944cc9d0017a35825e29b071007e48db48310e1ccc5b1d7d72e56a306462db20eebe8169d79122f638ac5931200d2cc99321cfd3ce1a39bfa7d757b2163e72b4_1280.jpg",
              imageAlt: "Residential consultation"
            },
            {
              imageSrc: "https://pixabay.com/get/g27437780c9c736b8d1d1d47c4bd42fa147209992d19690b7e7cbcbc6e2d3b912bb890945e97f99594e5d177243f62b9572c6ce0453a7bb16b91f6e86e1c57fa1_1280.jpg",
              imageAlt: "Sales team leader"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="We specialize in delivering exceptional door-to-door sales results through proven methodologies, comprehensive training programs, and personalized customer engagement strategies that drive measurable business growth."
          features={[
            {
              icon: Users,
              title: "Expert Sales Team",
              description: "Our professionally trained representatives bring years of experience in direct sales, relationship building, and customer conversion strategies."
            },
            {
              icon: Target,
              title: "Proven Results",
              description: "Consistent track record of exceeding sales targets and delivering measurable ROI for businesses across various industries and market segments."
            },
            {
              icon: TrendingUp,
              title: "Growth Strategy",
              description: "Comprehensive market analysis and customized sales approaches designed to maximize your reach and accelerate business expansion."
            },
            {
              icon: Award,
              title: "Quality Assurance",
              description: "Rigorous quality control processes and ongoing performance monitoring ensure every customer interaction meets the highest professional standards."
            }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <PricingCardTwo
          title="Choose Your Sales Solution"
          description="Professional door-to-door sales services tailored to your business needs and growth objectives"
          tag="Services"
          tagIcon={Briefcase}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "residential",
              badge: "Most Popular",
              badgeIcon: Home,
              price: "$2,500/mo",
              subtitle: "Perfect for residential market penetration",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "about" }
              ],
              features: [
                "Dedicated residential sales team",
                "Neighborhood mapping & targeting",
                "Follow-up appointment scheduling",
                "Monthly performance reports",
                "Lead qualification system"
              ]
            },
            {
              id: "commercial",
              badge: "Enterprise",
              badgeIcon: Building,
              price: "$4,500/mo",
              subtitle: "Comprehensive B2B sales solutions",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Schedule Demo", href: "contact" }
              ],
              features: [
                "Business-to-business specialists",
                "Executive-level presentations",
                "CRM integration & tracking",
                "Custom sales materials",
                "Dedicated account manager"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Proven Sales Performance"
          description="Our track record speaks for itself with consistent results across all client engagements"
          tag="Results"
          tagIcon={BarChart3}
          textboxLayout="default"
          animationType="scale-rotate"
          gridVariant="uniform-all-items-equal"
          metrics={[
            {
              id: "1",
              icon: TrendingUp,
              title: "Conversion Rate",
              value: "35%"
            },
            {
              id: "2",
              icon: Users,
              title: "Happy Clients",
              value: "500+"
            },
            {
              id: "3",
              icon: DollarSign,
              title: "Revenue Generated",
              value: "$12M+"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Sales Experts"
          description="Experienced professionals dedicated to driving your business growth through proven sales strategies"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          animationType="blur-reveal"
          gridVariant="uniform-all-items-equal"
          members={[
            {
              id: "1",
              name: "Michael Rodriguez",
              role: "Sales Director",
              description: "15+ years in direct sales with expertise in team leadership and strategic market development.",
              imageSrc: "https://pixabay.com/get/g27437780c9c736b8d1d1d47c4bd42fa147209992d19690b7e7cbcbc6e2d3b912bb890945e97f99594e5d177243f62b9572c6ce0453a7bb16b91f6e86e1c57fa1_1280.jpg",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/michael-rodriguez" },
                { icon: Mail, url: "mailto:michael@salesforcepro.com" }
              ]
            },
            {
              id: "2",
              name: "Sarah Thompson",
              role: "Training Specialist",
              description: "Certified sales trainer specializing in door-to-door techniques and customer relationship management.",
              imageSrc: "https://pixabay.com/get/g3183a3980a84ebf701ba3c1350a22bbf5b462e51ae8be97b022c1855b0476d32cbb005f71b8a77c046fa72df3157862936928cf1644edad673ade145bb8c8775_1280.jpg",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/sarah-thompson" },
                { icon: Mail, url: "mailto:sarah@salesforcepro.com" }
              ]
            },
            {
              id: "3",
              name: "David Chen",
              role: "Business Development",
              description: "Results-driven professional with proven track record in B2B sales and client relationship building.",
              imageSrc: "https://pixabay.com/get/gc1e48f2d0c94c221f6756861d5d68e9e28137a05d9b868cf926ccfaa69968203b33bc2e6976f8770e30e8489cbe950236600b014e2bbd4ceed044119d0f55b37_1280.png",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/david-chen" },
                { icon: Mail, url: "mailto:david@salesforcepro.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Success stories from businesses that have transformed their sales results with our expertise"
          tag="Testimonials"
          tagIcon={Quote}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          testimonials={[
            {
              id: "1",
              name: "Jennifer Walsh",
              role: "CEO",
              company: "HomeSecure Solutions",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gfc9b6b1dfb77da7c74468402c076f73dac553c5b91257f9465c7fde667b96285392b0e3fcac4ba26b9129ef627f0dc886c2c6f3295889bf4d7dcac6feeb3f5ea_1280.jpg"
            },
            {
              id: "2",
              name: "Robert Martinez",
              role: "Sales Manager",
              company: "EcoEnergy Systems",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g4a9bf5d927055e32a87b208eb48fd0416e9e2e69727df554d25cc65f1afd92a69f3448c2568e33dda292637919eef2915e0c5ad7bbd0236a575f908f502c2f0d_1280.jpg"
            },
            {
              id: "3",
              name: "Lisa Anderson",
              role: "Operations Director",
              company: "TechGuard Security",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g6152b7c4aafdd1132a067591bcc6576494e6820f424d65db1fd4805073f6e705142136ca18d1734052d8eebf2771cfdc4aa91614a73438f8df992505eaccb688_1280.jpg"
            },
            {
              id: "4",
              name: "Mark Thompson",
              role: "Founder",
              company: "GreenLife Products",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g09431ef74db56df2b899e8cb347a777f05db5192f86138e5c144d3e3c22ebcb7b1af2abf48236fa3e01ecf2e1baa82fea71afdd2096408ea6d8229e30e07d7cf_1280.jpg"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join hundreds of successful businesses that have partnered with us to accelerate their sales growth"
          tag="Partners"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g05d91cc6dafbb9242a27fb72a12f2bd6b59f5932755367af99ecd4f0d376dc97057837800a6911a989d59cd445905637201bdc0e52c037e56f56539c871a8f6a_1280.jpg",
            "https://pixabay.com/get/ga0102339c3258e639bb516cbd3fa52403e79bd2aa4e928340dc48c0d7606387dbaf79a55ee6155879521e17e27c3cf02c52572b81613b78b28bb5c50a87f6f0f_1280.jpg",
            "https://pixabay.com/get/g4359629b434bf25c435e9c6b5e2992b5391646d6de375bd4cd26b98f85dc1e46546d23ef6fe01e09a47c59a11107264eb314960fda6727d99f340c7f6d2298de_1280.jpg",
            "https://pixabay.com/get/g72ac31fac612994e317506c56b39650ef96d80e33901982a1f2c2f193bdaf390180da7644e3c43b54cab1a59d31758e18f59036ea4faa4c429c91258c1d1422d_1280.jpg",
            "https://pixabay.com/get/ge8d5a4a43d05a04de4221ae2720154e0f0193a0a339572de4b9cd6ae4876a7dfe2dd0e98e4429d635c7a20f34c8998d22dad21688bfb2df6cd16913a248b48e1_1280.jpg",
            "https://pixabay.com/get/gc2089b6b4247590142bc57089cc82916528a7795180b2c3ff7d2c3689cc37040faa414f70b96f051b1042cc4a2a325bc3585b4cc071d953907776c8f266560cf_1280.jpg",
            "https://pixabay.com/get/g0db3dccda4fcd4c243c40a08dc97568446a08201310d742756d2c976a709d9afac34138df8056df5c09c51e059102b7ce23de3fa1a913f8613227cb759f48468_1280.jpg"
          ]
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our door-to-door sales services"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What types of products work best for door-to-door sales?",
              content: "Door-to-door sales are most effective for home improvement services, security systems, energy solutions, insurance products, and telecommunications services. We specialize in products that benefit from personal demonstration and relationship building."
            },
            {
              id: "2",
              title: "How do you ensure sales representatives are professional?",
              content: "All our representatives undergo comprehensive background checks, professional sales training, and ongoing performance monitoring. We maintain strict quality standards and provide continuous coaching to ensure every interaction reflects positively on your brand."
            },
            {
              id: "3",
              title: "What geographical areas do you cover?",
              content: "We currently operate in major metropolitan areas across the United States, with expansion capabilities based on client needs. Our team can provide detailed coverage maps for your specific target markets during consultation."
            },
            {
              id: "4",
              title: "How do you track and report sales performance?",
              content: "We provide comprehensive reporting through our CRM system, including daily activity reports, conversion metrics, lead quality analysis, and ROI tracking. Monthly performance reviews and strategy sessions are included in all service packages."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Phone}
          title="Ready to Boost Your Sales?"
          description="Contact us today for a free consultation and discover how our door-to-door sales expertise can transform your business growth."
          inputPlaceholder="Enter your business email"
          buttonText="Get Free Quote"
          termsText="By submitting, you agree to receive information about our sales services. We respect your privacy and never share your information."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="SalesForce Pro"
          columns={[
            {
              items: [
                { label: "Services", href: "services" },
                { label: "Residential Sales", href: "services" },
                { label: "Commercial Solutions", href: "services" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Results", href: "metrics" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Get Quote", href: "contact" },
                { label: "Support", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}