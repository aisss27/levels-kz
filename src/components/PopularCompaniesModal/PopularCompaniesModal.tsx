import { Dispatch, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Modal from '@mui/material/Modal';
import { Company } from '../Dashboard/PopularCompanies/PopularCompanies.tsx';
import styles from './PopularCompaniesModal.module.css';
import { useNavigate } from 'react-router-dom';

type PopularCompaniesModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  companies: Company[];
};

export default function PopularCompaniesModal({
  open,
  setOpen,
  companies,
}: PopularCompaniesModalProps) {
  const navigate = useNavigate();

  const goToCompanyPage = (companyId: string) => {
    navigate(`/companypage/${companyId}`); // Navigate to the company's page
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.modalBox}>
        <h3 className={styles.table_heading}>Popular companies</h3>

        <table className={styles.table}>
          <tbody>
            {companies.map((company) => (
              <tr key={company.id}>
                <td>
                  <div className={styles.companyLogoName}>
                    <Box
                      component="img"
                      src={company.image}
                      sx={{
                        borderRadius: 1,
                        height: '48px',
                        width: '48px',
                      }}
                    />
                    {company.name}
                  </div>
                  <Button variant="contained"  endIcon={<ArrowForwardIcon onClick={() => goToCompanyPage(company.id)} />}>
                    explore
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Modal>
  );
}
