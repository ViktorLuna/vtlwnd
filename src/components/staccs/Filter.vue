<template>
	<div class="h-screen flex flex-col justify-between items-center">
        <div></div>

		<div class="max-h-[70vh] min-h-[50vh] border p-10 max-w-screen-md border-slate-300 overflow-auto">
			<h1>Filter Data</h1>
			<br>
			<select v-model="selectedDepartment" class="p-1 mr-1 mb-1">
				<option value="">All Department</option>
				<option v-for="department in departments" :key="department">{{ department }}</option>
			</select>
			
			<select v-model="selectedSection" class="p-1 mr-1 mb-1">
				<option value="">All Sections</option>
				<option v-for="section in sortedSections" :key="section">{{ section }}</option>
			</select>

			<select v-model="selectedTeam" class="p-1 mr-1">
				<option value="">All Teams</option>
				<option v-for="team in sortedTeams" :key="team">{{ team }}</option>
			</select>

			<br><br>

			<div v-if="filteredData.length > 0">
				<ul>
					<li v-for="(item, index) in filteredData" :key="index">
						<h3>{{ item }}</h3>
					</li>
				</ul>
			</div>
			<div v-else>
				No data found.
			</div>
		</div>

        <div class="border border-slate-300 p-5 hover:bg-gray-100 hover:cursor-pointer">
            <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-slate-700 hover:stroke-slate-900">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
            </a>
        </div>
	</div>
	
</template>

<script setup>
import { ref, computed } from 'vue'

const Empdata = ref([
	{ name: 'juswa', department:'IHS', section: 'SD BK', team: 'CAD'},
	{ name: 'clancy', department:'IHS', section: 'SD AK', team: 'Global'},
	{ name: 'nico', department:'IHS', section: 'SD AK', team: 'SD AK 2'},
	{ name: 'ned', department:'IHS', section: 'SD logistics', team: 'USA'},
	{ name: 'trash', department:'QA', section: 'Quality Management 1', team: 'Quality and Document Control 1'},
	{ name: 'trash2', department:'QA', section: 'Quality Management 2', team: 'Quality and Document Control 2'},
	{ name: 'tyler', department:'CAD Planning 1', section: 'Plan Administration', team: 'Plan Control'},
]);

const departments = [...new Set(Empdata.value.map(item => item.department))]

const selectedDepartment = ref('');
const selectedSection = ref('');
const selectedTeam = ref('');

const filteredData = computed(() => {

	if (!selectedDepartment.value) {
		return Empdata.value;
	}
	return Empdata.value.filter(item => {
		const matchDepartment = !selectedDepartment.value || item.department == selectedDepartment.value;
		const matchSection = !selectedSection.value || item.section === selectedSection.value;
		const matchTeam = !selectedTeam.value || item.team === selectedTeam.value;
		return matchDepartment && matchSection && matchTeam;
	});
	
});

const sortedSections = computed(() => {
	if (!selectedDepartment.value) {
		selectedSection.value = ''
	}
	selectedSection.value = ''
	let sectionInDepartments = Empdata.value.filter(item => item.department === selectedDepartment.value);
	return [...new Set(sectionInDepartments.map(item => item.section))].sort();
})

const sortedTeams = computed(() => {
	if (!selectedSection.value) {
		selectedTeam.value = ''
	}
	selectedTeam.value = ''
	let teamInSection = Empdata.value.filter(item => item.section === selectedSection.value);
	return [...new Set(teamInSection.map(item => item.team))].sort();
})

</script>