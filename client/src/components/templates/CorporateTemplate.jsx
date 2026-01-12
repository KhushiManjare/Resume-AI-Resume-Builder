import React from "react";

const CorporateTemplate = ({ data, accentColor = "#2563eb" }) => {
  if (!data) return null;

  return (
    <div className="bg-white text-black max-w-3xl mx-auto p-10 font-sans text-sm leading-relaxed">
      
      {/* HEADER */}
      <div className="text-center pb-4">
        <h1
          className="text-2xl font-bold tracking-wide uppercase"
          style={{ color: accentColor }}
        >
          {data?.name}
        </h1>

        <p className="text-sm font-medium mt-1">
          {data?.title}
        </p>

        <p className="text-xs mt-2 text-gray-700">
          {data?.email} | {data?.phone} | {data?.location}
        </p>

        {data?.linkedin && (
          <p className="text-xs mt-1 text-gray-700">
            {data.linkedin}
          </p>
        )}

        {/* Accent Divider */}
        <div
          className="mt-4 h-[2px] w-full"
          style={{ backgroundColor: accentColor }}
        />
      </div>

      {/* SUMMARY */}
      {data?.summary && (
        <Section title="Professional Summary" accentColor={accentColor}>
          <p>{data.summary}</p>
        </Section>
      )}

      {/* SKILLS */}
      {data?.skills?.length > 0 && (
        <Section title="Area of Expertise" accentColor={accentColor}>
          <div className="grid grid-cols-2 gap-2">
            {data.skills.map((skill, i) => (
              <span key={i}>• {skill}</span>
            ))}
          </div>
        </Section>
      )}

      {/* EXPERIENCE */}
      {data?.experience?.length > 0 && (
        <Section title="Professional Experience" accentColor={accentColor}>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between font-semibold">
                <span>{exp.role} — {exp.company}</span>
                <span className="text-xs">{exp.duration}</span>
              </div>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                {exp.points?.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>
      )}

      {/* EDUCATION */}
      {data?.education?.length > 0 && (
        <Section title="Education" accentColor={accentColor}>
          {data.education.map((edu, i) => (
            <div key={i} className="mb-3">
              <div className="flex justify-between font-semibold">
                <span>{edu.degree}</span>
                <span className="text-xs">{edu.duration}</span>
              </div>
              <p>{edu.institute}</p>
            </div>
          ))}
        </Section>
      )}

      {/* ADDITIONAL */}
      {data?.additional?.length > 0 && (
        <Section title="Additional Information" accentColor={accentColor}>
          <ul className="space-y-1">
            {data.additional.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
};

const Section = ({ title, children, accentColor }) => (
  <div className="mt-6">
    <h2
      className="uppercase font-semibold text-xs pb-1 mb-2"
      style={{
        color: accentColor,
        borderBottom: `1px solid ${accentColor}`,
      }}
    >
      {title}
    </h2>
    {children}
  </div>
);

export default CorporateTemplate;
