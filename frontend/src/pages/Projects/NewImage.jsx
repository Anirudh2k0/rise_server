import { useGetInstrumentsQuery } from "@/api-services/instrumentsService";
import { useGetStorageQuery } from "@/api-services/storageService";
import React, { useState } from "react";
import Dropdown from "@/components/Dropdown/Dropdown";
import { Grid, Stack, Button } from "@mui/material";
import Upload from "@/components/Upload/Upload";

const NewImage = () => {
  const { data: insData } = useGetInstrumentsQuery();
  const { data: storageData } = useGetStorageQuery();

  const insOptions = insData?.map((item) => ({
    value: item._id,
    label: item._id,
  }));
  const storageOptions = storageData?.map((item) => ({
    value: item._id,
    label: item._id,
  }));

  const dropData = {
    insDropData: [
      { id: "Instruments", label: "Instruments", options: insOptions },
    ],
    storDropData: [
      { id: "Storage", label: "Storage", options: storageOptions },
    ],
  };

  const [valsIns, setValsIns] = useState({});
  const [valsStor, setValsStor] = useState({});

  const handleChange = (target, setVals) => {
    setVals((prev) => ({ ...prev, [target.name]: target.value }));
  };

  return (
    <div>
      {insData?.length > 0 && storageData?.length > 0 ? (
        <div>
          <Grid
            container
            my={4}
            spacing={3}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {dropData.insDropData.map((dropdownItem) => (
              <Grid key={dropdownItem.id} item xs={8} md={4}>
                <Dropdown
                  id={dropdownItem.id}
                  label={dropdownItem.label}
                  options={dropdownItem.options}
                  value={valsIns[dropdownItem.id] || ""}
                  onChange={(e) => handleChange(e.target, setValsIns)}
                  required
                />
              </Grid>
            ))}

            {dropData.storDropData.map((dropdownItem) => (
              <Grid key={dropdownItem.id} item xs={8} md={4}>
                <Dropdown
                  id={dropdownItem.id}
                  label={dropdownItem.label}
                  options={dropdownItem.options}
                  value={valsStor[dropdownItem.id] || ""}
                  onChange={(e) => handleChange(e.target, setValsStor)}
                  required
                />
              </Grid>
            ))}
          </Grid>
          {Object.keys(valsStor).length > 0 > 0 &&
          Object.keys(valsIns).length > 0 > 0 ? (
            <Upload />
          ) : (
            <div>Please Choose Instruments and Storage</div>
          )}
        </div>
      ) : (
        <div>Please check if storage Units and Instruments are available</div>
      )}
    </div>
  );
};

export default NewImage;
