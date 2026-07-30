import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {
  ProfileData,
  Experience,
  SkillGroup,
  Education,
  Project,
  Certification,
} from '../../types';
import { PortfolioRepository } from '../../services/implementations/PortfolioRepository';

export interface PortfolioState {
  profile: ProfileData | null;
  experience: Experience[];
  skills: SkillGroup[];
  education: Education[];
  projects: Project[];
  certifications: Certification[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  lastRevalidated: number | null;
  isStale: boolean;
}

const initialState: PortfolioState = {
  profile: null,
  experience: [],
  skills: [],
  education: [],
  projects: [],
  certifications: [],
  status: 'idle',
  error: null,
  lastRevalidated: null,
  isStale: false,
};

export const fetchPortfolioData = createAsyncThunk(
  'portfolio/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const repository = new PortfolioRepository();
      return await repository.getAll();
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Failed to load portfolio'
      );
    }
  }
);

export const revalidatePortfolioData = createAsyncThunk(
  'portfolio/revalidate',
  async (_, { rejectWithValue }) => {
    try {
      const repository = new PortfolioRepository();
      return await repository.revalidate();
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Revalidation failed'
      );
    }
  }
);

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    markStale(state) {
      state.isStale = true;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolioData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPortfolioData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profile = action.payload.profile;
        state.experience = action.payload.experience;
        state.skills = action.payload.skills;
        state.education = action.payload.education;
        state.projects = action.payload.projects;
        state.certifications = action.payload.certifications;
        state.lastRevalidated = Date.now();
        state.isStale = false;
      })
      .addCase(fetchPortfolioData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = (action.payload as string) || 'Unknown error';
      })
      .addCase(revalidatePortfolioData.fulfilled, (state, action) => {
        state.profile = action.payload.profile;
        state.experience = action.payload.experience;
        state.skills = action.payload.skills;
        state.education = action.payload.education;
        state.projects = action.payload.projects;
        state.certifications = action.payload.certifications;
        state.lastRevalidated = Date.now();
        state.isStale = false;
      })
      .addCase(revalidatePortfolioData.rejected, (state, action: PayloadAction<unknown>) => {
        state.isStale = true;
        state.error = (action.payload as string) || 'Revalidation failed';
      });
  },
});

export const { markStale, clearError } = portfolioSlice.actions;
export default portfolioSlice.reducer;
