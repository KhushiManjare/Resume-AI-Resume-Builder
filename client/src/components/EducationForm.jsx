// import { GraduationCap, Plus, Trash2 } from "lucide-react";
// import React from "react";

// const EducationForm = ({ data, onChange }) => {
//   const addEducation = () => {
//     // Define the structure of a new education entry with blank fields.
//     const newEducation = {
//       institution: "",
//       degree: "",
//       field: "",
//       graduation_date: "",
//       gpa: "",
//     };

//     // Use the spread operator to create a new array instance for immutability.
//     onChange([...data, newEducation]);
//   };

//   const removeEducation = (index) => {
//     // Filter the array, excluding the item whose index matches the provided index.
//     const updated = data.filter((_, i) => i !== index);

//     // Pass the new filtered array back to the parent state.
//     onChange(updated);
//   };

//   const updateEducation = (index, field, value) => {
//     // 1. Create a shallow copy of the main array (immutability).
//     const updated = [...data];

//     // 2. Create a shallow copy of the specific object being modified.
//     // 3. Use computed property name ([field]: value) to update the specific key.
//     updated[index] = { ...updated[index], [field]: value };

//     // Pass the new array back to the parent state.
//     onChange(updated);
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
//             Education
//           </h3>

//           <p className="text-sm text-gray-500">Add your Education Details</p>
//         </div>

//         {/* Button to Add a new Education Entry */}
//         <button
//           onClick={addEducation}
//           className="flex items-center gap-2 px-3 py-1 text-sm bg-blue-100 text-blue-400 rounded-lg hover:bg-blue-200 transition-colors"
//         >
//           <Plus className="size-4" />
//           Add Education
//         </button>
//       </div>

//       {/* Conditional Rendering: Show message if no data exists */}
//       {data.length === 0 ? (
//         <div className="text-center py-8 text-gray-500">
//           <GraduationCap className="w-12 h-12 mx-auto mb-3 text-gray-300" />
//           <p>No education added yet.</p>
//           <p className="text-sm">Click "Add Education" to get started.</p>
//         </div>
//       ) : (
//         /* List of Education Entries */
//         <div className="space-y-4">
//           {data.map((education, index) => (
//             <div
//               key={index} // NOTE: Using index as key is acceptable here since items are not reordered/filtered outside of controlled actions.
//               className="p-4 border border-gray-200 rounded-lg space-y-3"
//             >
//               <div className="flex justify-between items-start">
//                 {/* Title and Remove Button */}
//                 <h4>Education #{index + 1}</h4>
//                 <button
//                   onClick={() => removeEducation(index)}
//                   className="text-red-500 hover:text-red-700 transition-colors"
//                 >
//                   <Trash2 className="size-4" />
//                 </button>
//               </div>

//               {/* Input Fields for a Single Education Entry */}
//               <div className="grid md:grid-cols-2 gap-3">
//                 {/* Institution Name */}
//                 <input
//                   value={education.institution || ""}
//                   onChange={(e) =>
//                     updateEducation(index, "institution", e.target.value)
//                   }
//                   type="text"
//                   placeholder="Institution Name"
//                   className="px-3 py-2 text-sm"
//                 />

//                 {/* Degree */}
//                 <input
//                   value={education.degree || ""}
//                   onChange={(e) =>
//                     updateEducation(index, "degree", e.target.value)
//                   }
//                   type="text"
//                   placeholder="Degree (e.g., Bachelor's, Master's)"
//                   className="px-3 py-2 text-sm"
//                 />

//                 {/* Field of Study */}
//                 <input
//                   value={education.field || ""}
//                   onChange={(e) =>
//                     updateEducation(index, "field", e.target.value)
//                   }
//                   type="text"
//                   placeholder="Field of Study"
//                   className="px-3 py-2 text-sm"
//                 />

//                 {/* Graduation Date (Month/Year Picker) */}
//                 <input
//                   value={education.graduation_date || ""}
//                   onChange={(e) =>
//                     updateEducation(index, "graduation_date", e.target.value)
//                   }
//                   type="month"
//                   className="px-3 py-2 text-sm"
//                 />
//               </div>

//               {/* GPA */}
//               <input
//                 value={education.gpa || ""}
//                 onChange={(e) => updateEducation(index, "gpa", e.target.value)}
//                 type="text"
//                 placeholder="GPA (Optional)"
//                 className="px-3 py-2 text-sm"
//               />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default EducationForm;
import { GraduationCap, Plus, Trash2 } from "lucide-react";
import React from "react";

const EducationForm = ({ data, onChange }) => {
  const addEducation = () => {
    const newEducation = {
      institution: "",
      degree: "",
      field: "",
      graduation_date: "",
      gpa: "",
    };
    onChange([...data, newEducation]);
  };

  const removeEducation = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateEducation = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            Education
          </h3>
          <p className="text-sm text-gray-500">Add your Education Details</p>
        </div>

        <button
          onClick={addEducation}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
        >
          <Plus className="size-4" />
          Add Education
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <GraduationCap className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p>No education added yet.</p>
          <p className="text-sm">Click "Add Education" to get started.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((education, index) => (
            <div
              key={index}
              className="p-4 border border-white rounded-lg space-y-3"
            >
              <div className="flex justify-between items-start">
                <h4>Education #{index + 1}</h4>
                <button
                  onClick={() => removeEducation(index)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <input
                  value={education.institution || ""}
                  onChange={(e) =>
                    updateEducation(index, "institution", e.target.value)
                  }
                  type="text"
                  placeholder="Institution Name"
                  className="px-3 py-2 text-sm border border-blue-300 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-200 outline-none"
                />

                <input
                  value={education.degree || ""}
                  onChange={(e) =>
                    updateEducation(index, "degree", e.target.value)
                  }
                  type="text"
                  placeholder="Degree (e.g., Bachelor's, Master's)"
                  className="px-3 py-2 text-sm border border-blue-300 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-200 outline-none"
                />

                <input
                  value={education.field || ""}
                  onChange={(e) =>
                    updateEducation(index, "field", e.target.value)
                  }
                  type="text"
                  placeholder="Field of Study"
                  className="px-3 py-2 text-sm border border-blue-300 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-200 outline-none"
                />

                <input
                  value={education.graduation_date || ""}
                  onChange={(e) =>
                    updateEducation(index, "graduation_date", e.target.value)
                  }
                  type="month"
                  className="px-3 py-2 text-sm border border-blue-300 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-200 outline-none"
                />
              </div>

              <input
                value={education.gpa || ""}
                onChange={(e) =>
                  updateEducation(index, "gpa", e.target.value)
                }
                type="text"
                placeholder="GPA (Optional)"
                className="px-3 py-2 text-sm border border-blue-300 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-200 outline-none"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationForm;
