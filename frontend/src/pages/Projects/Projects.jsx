import {
  useDeleteProjectMutation,
  useGetProjectsQuery,
  usePostProjectMutation,
  useUpdateProjectMutation,
} from '@/api-services/projectsService';
import CRUDDataGrid from '@/components/Common/CRUDDataGrid';
import {
  projectsDefaultFormData,
  projectsFormElements,
  projectsTableColumns,
} from './data';

function Projects() {
  return (
    <CRUDDataGrid
      title='Projects'
      modalTitle='Project'
      columns={projectsTableColumns}
      dropdownsList={projectsFormElements.dropdowns}
      inputsList={projectsFormElements.inputs}
      defaultFormDetails={projectsDefaultFormData}
      getQueryFn={useGetProjectsQuery}
      postQueryFn={usePostProjectMutation}
      updateQueryFn={useUpdateProjectMutation}
      deleteQueryFn={useDeleteProjectMutation}
    />
  );
}

export default Projects;
