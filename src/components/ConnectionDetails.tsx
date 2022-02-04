import React, { Fragment, useEffect, useState } from 'react';

import AuthorizeButton from './AuthorizeButton';
import ConnectionForm from './ConnectionForm';
import { Dialog } from '@headlessui/react';
import Divider from './Divider';
import { REDIRECT_URL } from '../constants/urls';
import ResourceForm from './ResourceForm';
import ResourceList from './ResourceList';
import StatusBadge from './StatusBadge';
import TopBar from './TopBar';
import { authorizationVariablesRequired } from '../utils/authorizationVariablesRequired';
import classNames from 'classnames';
import { useConnections } from '../utils/useConnections';

interface Props {
  onClose: () => void;
}

const ConnectionDetails = ({ onClose }: Props) => {
  const [selectedResource, setSelectedResource] = useState<string | null>(null);

  const {
    selectedConnection,
    setSelectedConnection,
    getResourceConfig,
    isUpdating,
  } = useConnections();
  if (!selectedConnection) return null;

  const {
    enabled,
    state,
    auth_type,
    authorize_url,
    name,
    tag_line,
    form_fields,
  } = selectedConnection;

  const hasFormFields = form_fields?.filter((field) => !field.hidden)?.length;

  const [showSettings, setShowSettings] = useState(
    enabled && state !== 'callable' && hasFormFields
  );

  // TODO: implement hideResourceSettings from session
  const [showResources, setShowResources] = useState(false);

  const requiredAuth = authorizationVariablesRequired(selectedConnection);

  const shouldShowAuthorizeButton =
    enabled &&
    state !== 'callable' &&
    auth_type === 'oauth2' &&
    !requiredAuth &&
    !showSettings;

  useEffect(() => {
    if (showResources && getResourceConfig) {
      getResourceConfig();
    }
  }, [showResources]);

  if (selectedResource) {
    return (
      <div className="relative -m-6 sm:rounded-lg h-full">
        <TopBar
          onClose={onClose}
          onBack={() => setSelectedResource(null)}
          setShowSettings={setShowSettings}
          setShowResources={setShowResources}
          hideOptions={true}
        />
        <div className="h-full rounded-b-xl">
          <div
            className={classNames('text-center p-5 md:p-6', {
              'animate-pulse': isUpdating,
            })}
          >
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              <span className="capitalize">{selectedResource}</span>{' '}
              configuration
            </Dialog.Title>

            <p className="mt-2 text-sm text-gray-500 mb-5">{`
                Please provide default values for the fields below. These will be
                applied when creating new ${selectedResource} through our integration.`}</p>
            {/* <Divider /> */}
            <ResourceForm
              resource={selectedResource}
              closeForm={() => setSelectedResource(null)}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative -m-6 sm:rounded-lg h-full">
      <TopBar
        onClose={onClose}
        onBack={() => setSelectedConnection(null)}
        setShowSettings={setShowSettings}
        setShowResources={setShowResources}
        authorizeUrl={`${authorize_url}&redirect_uri=${REDIRECT_URL}`}
      />
      <div className="h-full rounded-b-xl">
        <div
          className={classNames('text-center p-5 md:p-6', {
            'animate-pulse': isUpdating,
          })}
        >
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            {name}
          </Dialog.Title>

          <p className="text-sm text-gray-500 mb-4">{tag_line}</p>
          <div className="mx-auto">
            <StatusBadge
              connection={selectedConnection}
              isLoading={isUpdating}
              size="large"
            />
          </div>

          {shouldShowAuthorizeButton ? (
            <div className="mt-4">
              <AuthorizeButton connection={selectedConnection} />
            </div>
          ) : null}

          {showResources ? (
            <Fragment>
              <Divider text="Configurable resources" />
              <ResourceList
                connection={selectedConnection}
                setSelectedResource={setSelectedResource}
              />
            </Fragment>
          ) : null}

          {hasFormFields && showSettings ? (
            <Fragment>
              {requiredAuth ? (
                <div className={'text-xs sm:text-sm text-gray-500'}>
                  {requiredAuth}
                </div>
              ) : null}
              <Divider text="Settings" />
              <ConnectionForm
                connection={selectedConnection}
                closeForm={() => setShowSettings(false)}
              />
            </Fragment>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default ConnectionDetails;
