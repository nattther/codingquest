import Link from "next/link"
import {
  ArrowRight,
  Award,
  BookOpen,
  Code,
  Globe,
  Layers,
  type LucideIcon,
  Rocket,
  Shield,
  Star,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6 text-custom-orange" />
            <span className="text-xl font-bold">CodinQuest</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-custom-orange">
              Fonctionnalités
            </Link>
            <Link href="#languages" className="text-sm font-medium hover:text-custom-orange">
              Langages
            </Link>
            <Link href="#levels" className="text-sm font-medium hover:text-custom-orange">
              Niveaux
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-custom-orange">
              Avantages
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Se connecter
            </Button>
            <Button size="sm" className="bg-custom-orange hover:bg-custom-orange/90 text-white">
              S'inscrire
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container flex flex-col items-center text-center">
            <div className="inline-block rounded-lg bg-custom-orange/20 px-3 py-1 text-sm text-custom-orange font-medium">
              Apprenez à coder en jouant
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Bienvenue sur <span className="text-custom-orange">CodinQuest</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-custom-gray md:text-xl">
              La plateforme qui combine l'apprentissage structuré d'Udemy et les défis de code de Codewars pour une
              expérience d'apprentissage immersive et ludique.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2 bg-custom-orange hover:bg-custom-orange/90 text-white">
                Commencer gratuitement <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-custom-orange/50 text-custom-orange hover:bg-custom-orange/10 hover:text-custom-orange hover:border-custom-orange"
              >
                Découvrir les défis
              </Button>
            </div>
            <div className="mt-16 w-full max-w-5xl overflow-hidden rounded-xl border border-custom-orange/20 bg-custom-black shadow-xl">
              <div className="relative aspect-video w-full bg-gradient-to-br from-custom-orange/20 via-custom-black to-custom-orange/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Code className="mx-auto h-16 w-16 text-custom-orange" />
                    <p className="mt-4 text-xl font-medium">Interface CodinQuest</p>
                    <p className="text-sm text-custom-gray">Défis de code interactifs et cours structurés</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 bg-custom-black">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Fonctionnalités principales</h2>
              <p className="mt-4 text-lg text-custom-gray">
                Découvrez ce qui rend CodinQuest unique et efficace pour l'apprentissage du code
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={Rocket}
                title="Apprentissage par le jeu"
                description="Résolvez des défis de code gamifiés qui rendent l'apprentissage amusant et addictif"
              />
              <FeatureCard
                icon={BookOpen}
                title="Cours structurés"
                description="Suivez des parcours d'apprentissage complets avec des cours vidéo et des exercices pratiques"
              />
              <FeatureCard
                icon={Users}
                title="Communauté active"
                description="Collaborez avec d'autres apprenants et partagez vos solutions et connaissances"
              />
              <FeatureCard
                icon={Award}
                title="Certifications reconnues"
                description="Obtenez des certifications valorisées par les entreprises pour valider vos compétences"
              />
              <FeatureCard
                icon={Layers}
                title="Progression par niveaux"
                description="Évoluez à travers différents niveaux de difficulté adaptés à votre progression"
              />
              <FeatureCard
                icon={Shield}
                title="Projets réels"
                description="Appliquez vos connaissances sur des projets concrets qui simulent des cas d'usage professionnels"
              />
            </div>
          </div>
        </section>

        <section id="languages" className="py-16">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Plus de 100 langages et technologies</h2>
              <p className="mt-4 text-lg text-custom-gray">
                Maîtrisez les langages de programmation les plus demandés sur le marché
              </p>
            </div>
            <div className="mt-12">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <LanguageCard name="JavaScript" />
                <LanguageCard name="Python" />
                <LanguageCard name="Java" />
                <LanguageCard name="C++" />
                <LanguageCard name="C#" />
                <LanguageCard name="PHP" />
                <LanguageCard name="Ruby" />
                <LanguageCard name="Swift" />
                <LanguageCard name="Kotlin" />
                <LanguageCard name="Go" />
                <LanguageCard name="Rust" />
                <LanguageCard name="TypeScript" />
                <LanguageCard name="SQL" />
                <LanguageCard name="R" />
                <LanguageCard name="Scala" />
                <LanguageCard name="Dart" />
                <LanguageCard name="Perl" />
                <LanguageCard name="Haskell" />
              </div>
              <div className="mt-8 text-center">
                <Button
                  variant="outline"
                  className="border-custom-orange/50 text-custom-orange hover:bg-custom-orange/10 hover:text-custom-orange hover:border-custom-orange"
                >
                  Voir tous les langages
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="levels" className="py-16 bg-custom-black">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Niveaux adaptés à tous</h2>
              <p className="mt-4 text-lg text-custom-gray">
                Progressez à votre rythme avec des défis adaptés à votre niveau de compétence
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <LevelCard
                level="Débutant"
                description="Premiers pas dans le monde de la programmation avec des concepts fondamentaux"
                color="bg-green-900/30 text-green-400 border border-green-800/50"
              />
              <LevelCard
                level="Intermédiaire"
                description="Approfondissez vos connaissances avec des concepts plus avancés et des algorithmes"
                color="bg-blue-900/30 text-blue-400 border border-blue-800/50"
              />
              <LevelCard
                level="Avancé"
                description="Relevez des défis complexes qui testent votre maîtrise des concepts avancés"
                color="bg-purple-900/30 text-purple-400 border border-purple-800/50"
              />
              <LevelCard
                level="Expert"
                description="Résolvez des problèmes de niveau professionnel qui simulent des cas réels d'entreprise"
                color="bg-custom-orange/20 text-custom-orange border border-custom-orange/50"
              />
            </div>
          </div>
        </section>

        <section id="benefits" className="py-16">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Avantages pour tous</h2>
              <p className="mt-4 text-lg text-custom-gray">
                CodinQuest offre des bénéfices uniques pour les apprenants et les entreprises
              </p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="rounded-xl border border-custom-orange/20 bg-custom-black p-8 shadow-sm">
                <Globe className="h-12 w-12 text-custom-orange" />
                <h3 className="mt-4 text-2xl font-bold">Pour les entreprises</h3>
                <ul className="mt-6 space-y-4">
                  <BenefitItem text="Certifications fiables pour évaluer les compétences des candidats" />
                  <BenefitItem text="Formation continue pour vos équipes avec suivi de progression" />
                  <BenefitItem text="Plateforme de recrutement pour identifier les talents" />
                  <BenefitItem text="Programmes personnalisés adaptés aux besoins spécifiques de votre entreprise" />
                  <BenefitItem text="Analyse détaillée des compétences et des performances" />
                </ul>
              </div>
              <div className="rounded-xl border border-custom-orange/20 bg-custom-black p-8 shadow-sm">
                <Users className="h-12 w-12 text-custom-orange" />
                <h3 className="mt-4 text-2xl font-bold">Pour les apprenants</h3>
                <ul className="mt-6 space-y-4">
                  <BenefitItem text="Apprentissage ludique qui maintient votre motivation" />
                  <BenefitItem text="Progression structurée du niveau débutant à expert" />
                  <BenefitItem text="Portfolio de projets pour valoriser vos compétences" />
                  <BenefitItem text="Communauté active pour échanger et progresser ensemble" />
                  <BenefitItem text="Certifications reconnues par les recruteurs" />
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-custom-orange text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Prêt à commencer votre aventure ?</h2>
            <p className="mt-4 text-lg opacity-90">
              Rejoignez des milliers d'apprenants qui transforment leur carrière grâce à CodinQuest
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 bg-custom-black text-white hover:bg-custom-black/90"
              >
                S'inscrire gratuitement <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50"
              >
                En savoir plus
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-custom-orange/20 py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5 text-custom-orange" />
              <span className="text-lg font-bold">CodinQuest</span>
            </div>
            <p className="text-sm text-custom-gray">© {new Date().getFullYear()} CodinQuest. Tous droits réservés.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-custom-gray hover:text-custom-orange">
                Conditions d'utilisation
              </Link>
              <Link href="#" className="text-sm text-custom-gray hover:text-custom-orange">
                Politique de confidentialité
              </Link>
              <Link href="#" className="text-sm text-custom-gray hover:text-custom-orange">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <div className="rounded-xl border border-custom-orange/20 bg-[#3a3a3a] p-6 shadow-sm hover:border-custom-orange/40 transition-colors">
      <Icon className="h-10 w-10 text-custom-orange" />
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="mt-2 text-custom-gray">{description}</p>
    </div>
  )
}

function LanguageCard({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center rounded-lg border border-custom-orange/20 bg-[#3a3a3a] p-4 shadow-sm hover:border-custom-orange/40 transition-colors">
      <span className="font-medium">{name}</span>
    </div>
  )
}

function LevelCard({ level, description, color }: { level: string; description: string; color: string }) {
  return (
    <div className="rounded-xl border border-custom-orange/20 bg-[#3a3a3a] p-6 shadow-sm hover:border-custom-orange/40 transition-colors">
      <div className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${color}`}>{level}</div>
      <p className="mt-4 text-custom-gray">{description}</p>
    </div>
  )
}

function BenefitItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <Star className="mt-1 h-5 w-5 shrink-0 text-custom-orange" />
      <span className="text-custom-gray">{text}</span>
    </li>
  )
}

