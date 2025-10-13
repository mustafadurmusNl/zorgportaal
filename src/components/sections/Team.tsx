"use client";

import { useTranslations } from "next-intl";
import { teamMembers } from "@/constants";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui";

const Team = () => {
  const t = useTranslations("team");

  return (
    <section className="section">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">{t("title")}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            {t("description")}
          </p>
        </div>

        {/* Team showcase with overlapping avatars */}
        <div className="flex justify-center items-center mb-12">
          <div className="flex -space-x-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gradient-to-br from-cyan-400 to-teal-500"
              >
                <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">
                  {String.fromCharCode(64 + i)}
                </div>
              </div>
            ))}
            <div className="w-16 h-16 rounded-full border-4 border-white shadow-lg bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
              +1.5K
            </div>
          </div>
        </div>

        {/* Team member cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                <CardTitle className="text-gray-900">{member.name}</CardTitle>
                <p className="text-cyan-600 font-semibold mb-2">
                  {member.role}
                </p>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {member.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">{t("cta.title")}</h3>
          <p className="text-xl mb-8 opacity-90">{t("cta.description")}</p>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-200"
            onClick={() => {}}
          >
            {t("cta.button")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;
