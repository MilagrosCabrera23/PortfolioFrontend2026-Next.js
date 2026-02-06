
import { skills, philosophyPoints, skillsHero, philosophHero } from "@/data/skills";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/app/components/ui/card"

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-(--bg-background) overflow-hidden">
            <div className="skills-hero">
                <h2 className="text-(--color-primary) text-4xl md:text-5xl sm:text-3xl font-bold text-center">{skillsHero.title}</h2>
                <p className="text-center text-(--color-text-secondary) text-lg mx-auto mb-12">
                    {skillsHero.description}
                </p>
            </div>

            <div className="flex items-center justify-center gap-4 mx-auto text-balance px-10">
                {skills.map((skillCategory, index) => (
                    <Card key={index}  className="bg-(--color-surface) text-white border-(--color-border) hover:border-(--color-primary) transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold text-center text-(--color-primary) group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{skillCategory.category}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-4 justify-center ">
                                {skillCategory.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="">
                                        <skill.icon className="w-8 h-8 text-(--color-text-secondary)" />
                                        <span className="text-sm text-white">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>


            <div id="philosophy">

                <div className="philosophy-hero mt-20">
                    <h2 className="text-white text-4xl md:text-5xl sm:text-3xl font-bold text-center">{philosophHero.title}</h2>
                    <p className="text-center text-(--color-text-secondary) text-lg mx-auto mb-12">
                        {philosophHero.description}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10">
                {philosophyPoints.map((item, index) => (
                    <Card
                        key={index}
                        className="bg-(--color-surface) text-(--color-primary) border border-(--color-border) hover:border-(--color-primary) transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group text-center"
                    >
                        <CardHeader className="flex flex-col items-center">

                            <div className={`w-14 h-14 rounded-lg flex items-center justify-center bg-(--bg-background) border border-(--color-border) group-hover:scale-110 transition-transform`}>
                                <item.icon className={`w-6 h-6 items-center${item.color}`} />
                            </div>


                            <CardTitle className="text-lg font-bold text-(--color-primary) group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                {item.title}
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <CardDescription className="text-g text-(--color-text-secondary) leading-relaxed text-balance tracking-wide">
                                {item.description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section >

    )
}