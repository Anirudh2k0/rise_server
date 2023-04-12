import {
  useDeleteStorageMutation,
  useGetStorageQuery,
  usePostStorageMutation,
  useUpdateStorageMutation,
} from '@/api-services/storageService';
import CRUDDataGrid from '@/components/Common/CRUDDataGrid';
import {
  storageFormElements,
  storagesDefaultFormData,
  storageTableColumns,
} from './data';

function Storage() {
  return (
    <CRUDDataGrid
      title='Storage'
      modalTitle='Storage'
      columns={storageTableColumns}
      dropdownsList={storageFormElements.dropdowns}
      inputsList={storageFormElements.inputs}
      defaultFormDetails={storagesDefaultFormData}
      getQueryFn={useGetStorageQuery}
      postQueryFn={usePostStorageMutation}
      updateQueryFn={useUpdateStorageMutation}
      deleteQueryFn={useDeleteStorageMutation}
    />
  );
}

export default Storage;
