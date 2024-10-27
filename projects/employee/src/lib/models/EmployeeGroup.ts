export class EmployeeGroupModel {
    id?: string;                 // Unique identifier for the group
    name?: string;               // Name of the employee group
    department?: string;         // Department the group belongs to
    function?: string;           // Primary function of the group
    createdOn?: Date;            // Date the group was created
    lead?: string;               // Team leader or manager of the group
    teamSize?: number;           // Number of members in the group
    budget?: number;             // Budget allocated to the group
    lastMeetingDate?: Date;      // Date of the last meeting
    status?: string;             // Current status of the group (e.g., Active, Inactive)
    location?: string;           // Location of the group
    deadline?: Date;      // Deadline for any ongoing projects
}
